import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emc2ozcpb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="emc2ozcpb"/>`,
		"fallback": "codicon:search",
	});
}

export default Component;
