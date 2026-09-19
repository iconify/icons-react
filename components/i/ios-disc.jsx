import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxx4v7bby.css';
import '../../css/s/snz1cvidd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zxx4v7bby"/><path class="snz1cvidd"/>`,
		"fallback": "ion:ios-disc",
	});
}

export default Component;
