import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ulco_5bbi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ulco_5bbi"/>`,
		"fallback": "lsicon:integral-distribute-filled",
	});
}

export default Component;
