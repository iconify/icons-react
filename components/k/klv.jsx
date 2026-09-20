import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9haurhgf.css';
import '../../css/p/pkyr6wbwh.css';
import '../../css/x/x5ql1ib_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z9haurhgf"/><path class="pkyr6wbwh"/><path class="x5ql1ib_r"/>`,
		"fallback": "token:klv",
	});
}

export default Component;
