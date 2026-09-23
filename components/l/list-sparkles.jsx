import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oui1tdodu.css';
import '../../css/y/yqe6_cdnh.css';
import '../../css/y/yw7siy1-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="oui1tdodu"/><path class="yqe6_cdnh"/><path class="yw7siy1-m"/></g>`,
		"fallback": "keyline-icons:list-sparkles",
	});
}

export default Component;
