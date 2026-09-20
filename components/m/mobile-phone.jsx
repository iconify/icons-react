import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lf6uoi_3k.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lf6uoi_3k"/>`,
		"fallback": "maki:mobile-phone",
	});
}

export default Component;
