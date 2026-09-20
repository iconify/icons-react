import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/luts3yb8a.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="luts3yb8a"/>`,
		"fallback": "map:natural-feature",
	});
}

export default Component;
