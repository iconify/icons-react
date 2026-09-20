import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b7lj7fb9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b7lj7fb9d"/>`,
		"fallback": "thesvg-color:keepassxc",
	});
}

export default Component;
