import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vxyo3ya3f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vxyo3ya3f"/>`,
		"fallback": "ion:md-water",
	});
}

export default Component;
