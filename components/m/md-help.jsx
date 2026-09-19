import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qv4n9hbhl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qv4n9hbhl"/>`,
		"fallback": "ion:md-help",
	});
}

export default Component;
