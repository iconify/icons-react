import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p9f89qgib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p9f89qgib"/>`,
		"fallback": "thesvg-color:schneider-electric",
	});
}

export default Component;
