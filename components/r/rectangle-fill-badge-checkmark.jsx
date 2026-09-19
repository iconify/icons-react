import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jy4c8qbek.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jy4c8qbek"/>`,
		"fallback": "f7:rectangle-fill-badge-checkmark",
	});
}

export default Component;
