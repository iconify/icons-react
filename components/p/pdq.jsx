import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwhd7bbup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwhd7bbup"/>`,
		"fallback": "thesvg-color:pdq",
	});
}

export default Component;
