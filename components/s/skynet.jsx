import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwj19gb-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwj19gb-a"/>`,
		"fallback": "simple-icons:skynet",
	});
}

export default Component;
