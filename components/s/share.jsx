import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/x/xu9e4nnnk.css';
import '../../css/y/ygjt-b_cu.css';
import '../../css/n/nxp8jccgi.css';
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
		"content": `<g class="xn5eo9bqs"><path class="xu9e4nnnk"/><path class="ygjt-b_cu"/><path class="nxp8jccgi"/><path class="auqwzjr4e"/><path class="zkbzg1bss"/></g>`,
		"fallback": "matita:share",
	});
}

export default Component;
