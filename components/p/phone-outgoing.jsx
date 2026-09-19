import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axg1wdx3v.css';
import '../../css/n/n5p315boc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="axg1wdx3v"/><path class="n5p315boc"/>`,
		"fallback": "bx:phone-outgoing",
	});
}

export default Component;
