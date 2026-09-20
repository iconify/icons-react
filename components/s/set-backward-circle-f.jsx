import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lya8juk5c.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lya8juk5c"/>`,
		"fallback": "jam:set-backward-circle-f",
	});
}

export default Component;
