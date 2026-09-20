import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-q3bzbzv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-q3bzbzv"/>`,
		"fallback": "thesvg-color:piwigo",
	});
}

export default Component;
