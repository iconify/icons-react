import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iybzt3kih.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iybzt3kih"/>`,
		"fallback": "fa6-regular:share-from-square",
	});
}

export default Component;
