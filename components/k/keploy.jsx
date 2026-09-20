import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rs-p3eb0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rs-p3eb0y"/>`,
		"fallback": "thesvg:keploy",
	});
}

export default Component;
