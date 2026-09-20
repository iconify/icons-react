import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gl2s-dboc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gl2s-dboc"/>`,
		"fallback": "lsicon:marketplace-outline",
	});
}

export default Component;
