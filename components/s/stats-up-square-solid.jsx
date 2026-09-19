import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qap_r6b7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qap_r6b7i"/>`,
		"fallback": "iconoir:stats-up-square-solid",
	});
}

export default Component;
