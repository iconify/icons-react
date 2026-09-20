import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vycjx8t6c.css';
import '../../css/p/puznsdb6i.css';
import '../../css/n/ngsnuobji.css';

const viewBox = {"width":165,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vycjx8t6c"/><path class="puznsdb6i"/><path clip-rule="evenodd" class="ngsnuobji"/></g>`,
		"fallback": "thesvg-color:nuxt-ui-light",
	});
}

export default Component;
