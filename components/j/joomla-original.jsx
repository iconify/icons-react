import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oynj5eb_n.css';
import '../../css/x/xvk-o3hyl.css';
import '../../css/c/csibq1blo.css';
import '../../css/t/tv9ch67sw.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oynj5eb_n"/><path class="xvk-o3hyl"/><path class="csibq1blo"/><path class="tv9ch67sw"/>`,
		"fallback": "lineicons:joomla-original",
	});
}

export default Component;
