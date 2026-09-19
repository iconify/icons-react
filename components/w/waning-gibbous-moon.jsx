import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rpm24ubad.css';
import '../../css/f/f6mv7mqxr.css';
import '../../css/h/hchhgsdmo.css';
import '../../css/e/ed0t9w22n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rpm24ubad"/><path class="f6mv7mqxr"/><path class="hchhgsdmo"/><path class="ed0t9w22n"/></g>`,
		"fallback": "fluent-emoji-flat:waning-gibbous-moon",
	});
}

export default Component;
