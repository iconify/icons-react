import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xpce0cc9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xpce0cc9p"/>`,
		"fallback": "thesvg-color:p5dotjs",
	});
}

export default Component;
