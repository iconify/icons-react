import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-21--bxk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-21--bxk"/>`,
		"fallback": "lsicon:integral-distribute-outline",
	});
}

export default Component;
