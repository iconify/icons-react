import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ry30_kgre.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ry30_kgre"/>`,
		"fallback": "bi:reception-4",
	});
}

export default Component;
