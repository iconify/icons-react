import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zsfm-8bpd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zsfm-8bpd"/>`,
		"fallback": "entypo:video",
	});
}

export default Component;
