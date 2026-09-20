import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5bm-t.css';
import '../../css/w/wtwpul.css';
import '../../css/f/fill-to-0.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-from-66.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t5bm-t"/><path class="wtwpul"/>`,
		"fallback": "line-md:star-alt-twotone-right-half",
	});
}

export default Component;
