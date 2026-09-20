import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqg02gbnm.css';
import '../../css/e/e6ihvhb_w.css';
import '../../css/k/kr1ub8ndd.css';
import '../../css/v/vy-d8corm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<ellipse class="rqg02gbnm"/><path class="e6ihvhb_w"/><path class="kr1ub8ndd"/><path class="vy-d8corm"/>`,
		"fallback": "uim:toilet-paper",
	});
}

export default Component;
