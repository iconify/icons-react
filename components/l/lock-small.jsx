import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ofbry_bvj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ofbry_bvj"/>`,
		"fallback": "codicon:lock-small",
	});
}

export default Component;
