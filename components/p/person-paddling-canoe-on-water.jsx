import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_88s3cmp.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_88s3cmp"/>`,
		"fallback": "pinhead:person-paddling-canoe-on-water",
	});
}

export default Component;
