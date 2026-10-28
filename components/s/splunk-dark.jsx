import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oovhg-9to.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oovhg-9to"/>`,
		"fallback": "selfhst:splunk-dark",
	});
}

export default Component;
