import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mehx9bbph.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mehx9bbph"/>`,
		"fallback": "thesvg:transport-for-ireland",
	});
}

export default Component;
