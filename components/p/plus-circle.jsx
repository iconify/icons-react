import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uuqt_yb-q.css';
import '../../css/c/c6sfqyboe.css';
import '../../css/x/xfpsz_bsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uuqt_yb-q"/><path class="c6sfqyboe"/><path class="xfpsz_bsa"/>`,
		"fallback": "prime:plus-circle",
	});
}

export default Component;
