import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_jfsqb3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p_jfsqb3k"/>`,
		"fallback": "cbi:paperless-ngx",
	});
}

export default Component;
