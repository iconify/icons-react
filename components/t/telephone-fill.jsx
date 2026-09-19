import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rdhvouaib.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rdhvouaib"/>`,
		"fallback": "bi:telephone-fill",
	});
}

export default Component;
