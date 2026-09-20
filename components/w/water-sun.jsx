import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xcqr5ubrs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xcqr5ubrs"/>`,
		"fallback": "reicon:water-sun",
	});
}

export default Component;
