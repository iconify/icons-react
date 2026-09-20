import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lkfr8qdyr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lkfr8qdyr"/>`,
		"fallback": "ix:sword-swing",
	});
}

export default Component;
