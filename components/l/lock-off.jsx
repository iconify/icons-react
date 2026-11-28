import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/m0psnqe2o.css';
import '../../css/h/hgj93qb8m.css';
import '../../css/q/qjzyurbpi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="m0psnqe2o"/><path class="hgj93qb8m"/><path class="qjzyurbpi"/></g>`,
		"fallback": "iconaut:lock-off",
	});
}

export default Component;
