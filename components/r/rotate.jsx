import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/watb0jbco.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="watb0jbco"/>`,
		"fallback": "nrk:rotate",
	});
}

export default Component;
