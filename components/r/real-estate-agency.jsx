import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ehev4sv_u.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ehev4sv_u"/>`,
		"fallback": "map:real-estate-agency",
	});
}

export default Component;
