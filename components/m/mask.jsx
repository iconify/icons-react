import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xqu2my3vz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xqu2my3vz"/>`,
		"fallback": "bi:mask",
	});
}

export default Component;
