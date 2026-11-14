import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lzm7kvups.css';
import '../../css/a/a-z24ibwd.css';
import '../../css/z/zp01jbboj.css';
import '../../css/p/pfgsr9b3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="lzm7kvups"/><circle class="a-z24ibwd"/><path class="zp01jbboj"/><path class="pfgsr9b3x"/></g>`,
		"fallback": "evicons:motorcycle-electric",
	});
}

export default Component;
