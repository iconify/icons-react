import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zd6h7ob4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zd6h7ob4o"/>`,
		"fallback": "cbi:nextcloud",
	});
}

export default Component;
