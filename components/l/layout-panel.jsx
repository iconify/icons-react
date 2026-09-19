import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cne_cj2pu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cne_cj2pu"/>`,
		"fallback": "codicon:layout-panel",
	});
}

export default Component;
