import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ud2bkbc2w.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ud2bkbc2w"/>`,
		"fallback": "picon:pressure",
	});
}

export default Component;
