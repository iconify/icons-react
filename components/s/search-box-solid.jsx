import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oy08vwban.css';
import '../../css/h/hx5mj141a.css';
import '../../css/q/qxcq365rf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oy08vwban"/><path class="hx5mj141a"/><path class="qxcq365rf"/>`,
		"fallback": "stash:search-box-solid",
	});
}

export default Component;
