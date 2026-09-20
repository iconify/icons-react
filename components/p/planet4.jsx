import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxfh6lbxs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zxfh6lbxs"/>`,
		"fallback": "reicon:planet4",
	});
}

export default Component;
