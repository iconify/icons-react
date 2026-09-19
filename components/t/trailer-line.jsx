import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgdeoyjsb.css';
import '../../css/o/ofcc3eb8l.css';
import '../../css/w/w39gksq7h.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 qgdeoyjsb"/><path class="clr-i-outline clr-i-outline-path-2 ofcc3eb8l"/><path class="clr-i-outline clr-i-outline-path-3 w39gksq7h"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:trailer-line",
	});
}

export default Component;
