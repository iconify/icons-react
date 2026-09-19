import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnnz_hrwe.css';

const viewBox = {"width":1920,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnnz_hrwe"/>`,
		"fallback": "fa:television",
	});
}

export default Component;
