import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cns_8e9_u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cns_8e9_u"/>`,
		"fallback": "codicon:three-bars",
	});
}

export default Component;
