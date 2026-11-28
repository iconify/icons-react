import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m60pqtldl.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/m-fhnx1pb.css';
import '../../css/q/qjzyurbpi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m60pqtldl secondary"/><g class="dt0cm9dhy primary"><path class="m-fhnx1pb"/><path class="qjzyurbpi"/></g>`,
		"fallback": "iconaut:puzzle-off-duo",
	});
}

export default Component;
