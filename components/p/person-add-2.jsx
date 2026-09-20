import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lzkb3gzut.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lzkb3gzut"/>`,
		"fallback": "proicons:person-add-2",
	});
}

export default Component;
