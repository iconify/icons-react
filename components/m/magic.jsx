import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ol409_bjd.css';

const viewBox = {"width":24,"height":24,"left":-1,"top":-1.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ol409_bjd"/>`,
		"fallback": "jam:magic",
	});
}

export default Component;
