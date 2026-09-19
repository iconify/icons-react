import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fzyqdzbiu.css';
import '../../css/y/yv_brepse.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fzyqdzbiu"/><path class="yv_brepse"/>`,
		"fallback": "ant-design:up-circle-outline",
	});
}

export default Component;
