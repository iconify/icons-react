import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uyl23qbli.css';
import '../../css/t/t5e7my7ka.css';
import '../../css/v/vijoq8rto.css';
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
		"content": `<path class="uyl23qbli"/><path class="t5e7my7ka"/><path class="vijoq8rto"/><path class="o1615ib4d"/><path class="b0xi1bjln"/>`,
		"fallback": "streamline-emojis:waving-hand-1",
	});
}

export default Component;
