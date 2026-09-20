import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zenio235y.css';
import '../../css/p/pk8x84bjp.css';
import '../../css/j/jedy8pbrj.css';
import '../../css/q/qq61z-bmt.css';
import '../../css/a/a59et-buu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zenio235y"/><path class="pk8x84bjp"/><path class="jedy8pbrj"/><path class="qq61z-bmt"/><path class="a59et-buu"/>`,
		"fallback": "streamline-pixel:interface-essential-wrench-2",
	});
}

export default Component;
