import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/f/fzkgfv_8s.css';
import '../../css/h/hdj5huhzv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="fzkgfv_8s"/><path class="hdj5huhzv"/></g>`,
		"fallback": "streamline-logos:snapdragon-logo",
	});
}

export default Component;
