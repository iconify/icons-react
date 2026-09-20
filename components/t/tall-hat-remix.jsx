import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lkxnrq6cq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lkxnrq6cq"/>`,
		"fallback": "streamline-flex:tall-hat-remix",
	});
}

export default Component;
