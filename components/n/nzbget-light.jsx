import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgjsa8sgc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kgjsa8sgc"/>`,
		"fallback": "selfhst:nzbget-light",
	});
}

export default Component;
