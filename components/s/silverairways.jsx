import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ss9llcb2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ss9llcb2s"/>`,
		"fallback": "simple-icons:silverairways",
	});
}

export default Component;
