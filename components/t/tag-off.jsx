import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/viag24bxx.css';
import '../../css/n/nnw1_fa2c.css';
import '../../css/q/qjzyurbpi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="viag24bxx"/><path class="nnw1_fa2c"/><path class="qjzyurbpi"/></g>`,
		"fallback": "iconaut:tag-off",
	});
}

export default Component;
