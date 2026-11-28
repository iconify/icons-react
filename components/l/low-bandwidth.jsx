import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/b1ov2uh1u.css';
import '../../css/q/qam7hgbcr.css';
import '../../css/f/famauqsfu.css';
import '../../css/s/snebnhapy.css';
import '../../css/c/c8aq6bbcg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="b1ov2uh1u"/><path class="qam7hgbcr"/><path class="famauqsfu"/><path class="snebnhapy"/><path class="c8aq6bbcg"/></g>`,
		"fallback": "iconaut:low-bandwidth",
	});
}

export default Component;
