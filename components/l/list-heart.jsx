import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pimdvw83k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pimdvw83k"/>`,
		"fallback": "reicon:list-heart",
	});
}

export default Component;
