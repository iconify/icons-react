import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x565jhkyv.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x565jhkyv"/>`,
		"fallback": "academicons:scopus-square",
	});
}

export default Component;
