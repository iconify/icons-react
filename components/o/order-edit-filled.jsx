import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtmq0gbsm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mtmq0gbsm"/>`,
		"fallback": "lsicon:order-edit-filled",
	});
}

export default Component;
