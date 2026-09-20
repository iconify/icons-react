import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uyl23qbli.css';
import '../../css/u/uy_2stbfh.css';
import '../../css/k/k2l5gbcnd.css';
import '../../css/o/o1615ib4d.css';
import '../../css/b/b0xi1bjln.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uyl23qbli"/><path class="uy_2stbfh"/><path class="k2l5gbcnd"/><path class="o1615ib4d"/><path class="b0xi1bjln"/>`,
		"fallback": "streamline-emojis:waving-hand-2",
	});
}

export default Component;
