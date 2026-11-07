import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/snl37hbbd.css';
import '../../css/r/rgo7s3bar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="snl37hbbd"/><path class="rgo7s3bar"/>`,
		"fallback": "solar:traffic-outline",
	});
}

export default Component;
