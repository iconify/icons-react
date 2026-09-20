import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iujw47b0z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iujw47b0z"/>`,
		"fallback": "qlementine-icons:midi-16",
	});
}

export default Component;
