import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/svdy80z7e.css';
import '../../css/z/zd_-azbqb.css';
import '../../css/e/e39ud6bwf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="svdy80z7e"/><path class="zd_-azbqb"/><circle class="e39ud6bwf"/>`,
		"fallback": "carbon:navaid-military",
	});
}

export default Component;
