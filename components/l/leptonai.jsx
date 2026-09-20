import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/ma3i4nbnb.css';
import '../../css/z/zpdyuobzf.css';
import '../../css/b/bv9t2ie8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path clip-rule="evenodd" class="ma3i4nbnb"/><path clip-rule="evenodd" class="zpdyuobzf"/><path class="bv9t2ie8k"/></g>`,
		"fallback": "thesvg:leptonai",
	});
}

export default Component;
