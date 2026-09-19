import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xcnwacd4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xcnwacd4w"/>`,
		"fallback": "feather:type",
	});
}

export default Component;
