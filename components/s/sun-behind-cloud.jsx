import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h7mkmzx2k.css';
import '../../css/m/m8d-e8bsi.css';
import '../../css/w/wk2dpgb6q.css';
import '../../css/k/kogb1zhoe.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h7mkmzx2k"/><path class="m8d-e8bsi"/><path class="wk2dpgb6q"/><path class="kogb1zhoe"/></g>`,
		"fallback": "fluent-emoji-flat:sun-behind-cloud",
	});
}

export default Component;
