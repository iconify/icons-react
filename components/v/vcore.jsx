import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bm2o0bbcb.css';
import '../../css/w/w5z9ayb3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bm2o0bbcb"/><path class="w5z9ayb3v"/>`,
		"fallback": "token:vcore",
	});
}

export default Component;
