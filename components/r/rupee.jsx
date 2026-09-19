import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d47xi2b9o.css';
import '../../css/h/hgmaekite.css';
import '../../css/m/m5asxrbxd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d47xi2b9o"/><path class="hgmaekite"/><path class="m5asxrbxd"/>`,
		"fallback": "formkit:rupee",
	});
}

export default Component;
