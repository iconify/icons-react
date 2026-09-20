import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b0p10dgla.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b0p10dgla"/>`,
		"fallback": "oui:quote",
	});
}

export default Component;
