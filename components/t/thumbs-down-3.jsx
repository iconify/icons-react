import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gapzs4b1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gapzs4b1d"/>`,
		"fallback": "lineicons:thumbs-down-3",
	});
}

export default Component;
