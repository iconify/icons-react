import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tf-hwtb-u.css';
import '../../css/z/z39rqtbcx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tf-hwtb-u"/><path class="z39rqtbcx"/>`,
		"fallback": "streamline-ultimate:search-circle-alternate-bold",
	});
}

export default Component;
