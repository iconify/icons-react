import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oii_trd6d.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oii_trd6d"/>`,
		"fallback": "map:postal-code",
	});
}

export default Component;
