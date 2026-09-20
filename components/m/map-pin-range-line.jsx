import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jybtk96am.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jybtk96am"/>`,
		"fallback": "ri:map-pin-range-line",
	});
}

export default Component;
