import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uw12ul06r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uw12ul06r"/>`,
		"fallback": "ix:plant-details-filled",
	});
}

export default Component;
