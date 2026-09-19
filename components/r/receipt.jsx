import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfmcxfo2r.css';
import '../../css/r/rt4k2lbyk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfmcxfo2r"/><path class="rt4k2lbyk"/>`,
		"fallback": "circum:receipt",
	});
}

export default Component;
