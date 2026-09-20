import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oq8al8bls.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oq8al8bls"/>`,
		"fallback": "lsicon:one-to-one-filled",
	});
}

export default Component;
