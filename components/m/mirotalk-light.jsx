import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w3k-tlztq.css';
import '../../css/m/mtnsy1o2y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w3k-tlztq"/><path class="mtnsy1o2y"/>`,
		"fallback": "selfhst:mirotalk-light",
	});
}

export default Component;
