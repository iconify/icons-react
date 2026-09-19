import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fo2pqcc3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fo2pqcc3v"><animateTransform attributeName="transform" attributeType="XML" dur="10s" from="0 12 12" repeatCount="indefinite" to="360 12 12" type="rotate"/></path>`,
		"fallback": "eos-icons:rotating-gear",
	});
}

export default Component;
