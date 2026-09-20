import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hm0s3htrg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hm0s3htrg"/>`,
		"fallback": "mage:tube",
	});
}

export default Component;
