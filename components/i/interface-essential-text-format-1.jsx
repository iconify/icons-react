import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjzz82bjc.css';
import '../../css/b/bsmjsbbfw.css';
import '../../css/p/pac8mpbat.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjzz82bjc"/><path class="bsmjsbbfw"/><path class="pac8mpbat"/>`,
		"fallback": "streamline-pixel:interface-essential-text-format-1",
	});
}

export default Component;
