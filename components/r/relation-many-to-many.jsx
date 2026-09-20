import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jh_iujjwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jh_iujjwi"/>`,
		"fallback": "mdi:relation-many-to-many",
	});
}

export default Component;
