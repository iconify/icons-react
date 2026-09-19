import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tacmy8yln.css';
import '../../css/m/m45rcbqou.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tacmy8yln"/><path class="m45rcbqou"/></g>`,
		"fallback": "fluent-emoji-flat:open-hands-dark",
	});
}

export default Component;
