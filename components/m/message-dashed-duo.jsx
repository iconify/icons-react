import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sm28qqb4l.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/n_m1ugbqz.css';
import '../../css/a/ay-uj6bxa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary sm28qqb4l"/><g class="dt0cm9dhy primary"><path class="n_m1ugbqz"/><path class="ay-uj6bxa"/></g>`,
		"fallback": "iconaut:message-dashed-duo",
	});
}

export default Component;
