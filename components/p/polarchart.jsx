import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v49u3ub2d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v49u3ub2d"/>`,
		"fallback": "ix:polarchart",
	});
}

export default Component;
