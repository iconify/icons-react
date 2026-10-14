import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/q/q-l5idxlj.css';
import '../../css/r/rvftq6b8s.css';
import '../../css/j/jic72hbhn.css';
import '../../css/a/auqwzjr4e.css';
import '../../css/z/zkbzg1bss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="q-l5idxlj"/><path class="rvftq6b8s"/><path class="jic72hbhn"/><path class="auqwzjr4e"/><path class="zkbzg1bss"/></g>`,
		"fallback": "matita:share",
	});
}

export default Component;
