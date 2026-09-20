import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtw-06s3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xtw-06s3k"/>`,
		"fallback": "simple-icons:malt",
	});
}

export default Component;
