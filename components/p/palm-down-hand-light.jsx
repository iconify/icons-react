import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mqqosmbmp.css';
import '../../css/q/qw9-6zyef.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mqqosmbmp"/><path class="qw9-6zyef"/></g>`,
		"fallback": "fluent-emoji-flat:palm-down-hand-light",
	});
}

export default Component;
