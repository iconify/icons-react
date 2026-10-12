import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qyv06tbqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qyv06tbqo"/>`,
		"fallback": "andrsrxn:tally-one",
	});
}

export default Component;
