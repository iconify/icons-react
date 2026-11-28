import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sm28qqb4l.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gtipehbld.css';
import '../../css/e/exwkexfxf.css';
import '../../css/z/zrlh-6b7n.css';
import '../../css/k/k7ktwpz4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary sm28qqb4l"/><g class="dt0cm9dhy primary"><path class="gtipehbld"/><path class="exwkexfxf"/><path class="zrlh-6b7n"/><path class="k7ktwpz4v"/></g>`,
		"fallback": "iconaut:message-dots-duo",
	});
}

export default Component;
