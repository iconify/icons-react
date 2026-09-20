import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbrcyl_dg.css';

const viewBox = {"width":6,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cbrcyl_dg"/>`,
		"fallback": "octicon:triangle-right",
	});
}

export default Component;
