import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-99x8bls.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-99x8bls"/>`,
		"fallback": "ant-design:pay-circle-filled",
	});
}

export default Component;
