import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jlpgqyv3j.css';
import '../../css/v/v7m9djjzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="jlpgqyv3j"/><path class="v7m9djjzo"/></g>`,
		"fallback": "lets-icons:on-button-duotone-line",
	});
}

export default Component;
