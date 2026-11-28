import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bk0_bffgj.css';
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
		"content": `<path class="bk0_bffgj secondary"/><g class="dt0cm9dhy primary"><path class="viag24bxx"/><path class="nnw1_fa2c"/><path class="qjzyurbpi"/></g>`,
		"fallback": "iconaut:tag-off-duo",
	});
}

export default Component;
