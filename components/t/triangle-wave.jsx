import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv0d-oj0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hv0d-oj0f"/>`,
		"fallback": "mdi:triangle-wave",
	});
}

export default Component;
