import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qc99t7udr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qc99t7udr"/>`,
		"fallback": "heroicons:share-16-solid",
	});
}

export default Component;
