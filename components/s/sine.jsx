import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zizp4pbtg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zizp4pbtg"/>`,
		"fallback": "andrsrxn:sine",
	});
}

export default Component;
