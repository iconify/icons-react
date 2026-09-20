import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjsc6bbdz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cjsc6bbdz"/>`,
		"fallback": "ix:warning-rhomb-multiple",
	});
}

export default Component;
