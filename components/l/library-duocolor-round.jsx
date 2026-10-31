import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xn5coccyh.css';
import '../../css/p/p0jx8e9jq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xn5coccyh"/><path class="p0jx8e9jq"/></g>`,
		"fallback": "coolicons:library-duocolor-round",
	});
}

export default Component;
