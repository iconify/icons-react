import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/im61p5bjl.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="im61p5bjl"/>`,
		"fallback": "f7:rectangle-split-3x1",
	});
}

export default Component;
