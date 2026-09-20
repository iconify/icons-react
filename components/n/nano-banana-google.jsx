import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/opq-hhbcq.css';
import '../../css/b/bb03p5rwu.css';
import '../../css/u/uc313jbnj.css';
import '../../css/d/dw4j-tbmh.css';
import '../../css/w/wzrgt9biy.css';
import '../../css/x/xn8lvkclf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="opq-hhbcq"/><path class="bb03p5rwu"/><path class="uc313jbnj"/><path class="dw4j-tbmh"/><path clip-rule="evenodd" class="wzrgt9biy"/><path class="xn8lvkclf"/>`,
		"fallback": "thesvg-color:nano-banana-google",
	});
}

export default Component;
