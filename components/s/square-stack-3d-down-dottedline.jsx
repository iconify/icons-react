import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbdr4jq1r.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cbdr4jq1r"/>`,
		"fallback": "f7:square-stack-3d-down-dottedline",
	});
}

export default Component;
