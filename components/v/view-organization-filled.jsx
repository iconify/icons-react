import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/der5ev0pa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="der5ev0pa"/>`,
		"fallback": "tdesign:view-organization-filled",
	});
}

export default Component;
