import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/upjz_j38p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="upjz_j38p"/>`,
		"fallback": "icomoon-free:libreoffice",
	});
}

export default Component;
