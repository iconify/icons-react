import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nb6_zubqa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nb6_zubqa"/>`,
		"fallback": "selfhst:snapchat-dark",
	});
}

export default Component;
