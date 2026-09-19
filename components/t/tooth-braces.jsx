import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yeaa16b2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yeaa16b2s"/>`,
		"fallback": "griddy-icons:tooth-braces",
	});
}

export default Component;
