import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tuy-08beb.css';
import '../../css/j/j3xt6_l2d.css';
import '../../css/m/m93r1pbqy.css';
import '../../css/m/macilbcnn.css';
import '../../css/z/zsqz4clcq.css';
import '../../css/t/ttcuutlmf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tuy-08beb"/><path class="j3xt6_l2d"/><path class="m93r1pbqy"/><path class="macilbcnn"/><path class="zsqz4clcq"/><path class="ttcuutlmf"/>`,
		"fallback": "ion:ios-game-controller-b-outline",
	});
}

export default Component;
