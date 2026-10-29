import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/kkskfh74f.css';
import '../../css/a/axn76suqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="kkskfh74f"/><path class="axn76suqw"/></g>`,
		"fallback": "withicons:virus-sketch",
	});
}

export default Component;
