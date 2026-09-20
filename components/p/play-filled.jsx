import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqp4cw_dd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nqp4cw_dd"/>`,
		"fallback": "lsicon:play-filled",
	});
}

export default Component;
