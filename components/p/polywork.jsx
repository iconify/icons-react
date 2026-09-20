import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/grcw_sb5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="grcw_sb5s"/>`,
		"fallback": "simple-icons:polywork",
	});
}

export default Component;
