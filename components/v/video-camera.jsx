import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/asa8i895g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="asa8i895g"/>`,
		"fallback": "griddy-icons:video-camera",
	});
}

export default Component;
