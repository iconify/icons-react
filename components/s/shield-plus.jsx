import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hh1s3ih8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hh1s3ih8c"/>`,
		"fallback": "majesticons:shield-plus",
	});
}

export default Component;
