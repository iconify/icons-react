import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sm28qqb4l.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gtipehbld.css';
import '../../css/h/hzekqp9bo.css';
import '../../css/v/vmum7ebuf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary sm28qqb4l"/><g class="dt0cm9dhy primary"><path class="gtipehbld"/><path class="hzekqp9bo"/><path class="vmum7ebuf"/></g>`,
		"fallback": "iconaut:message-circle-question-duo",
	});
}

export default Component;
