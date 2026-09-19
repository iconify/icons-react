import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnhy8pd4d.css';
import '../../css/s/srze-hcsc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nnhy8pd4d"/><path class="srze-hcsc"/>`,
		"fallback": "ion:md-chatbubbles",
	});
}

export default Component;
