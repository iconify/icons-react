import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sm28qqb4l.css';
import '../../css/q/q32xggl4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary sm28qqb4l"/><path class="primary q32xggl4h"/>`,
		"fallback": "iconaut:message-circle-duo",
	});
}

export default Component;
