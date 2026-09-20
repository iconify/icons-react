import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zpx8qtbcl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zpx8qtbcl"/>`,
		"fallback": "streamline-ultimate:user-multiple-male-female",
	});
}

export default Component;
