import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqc_yq4_p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqc_yq4_p"/>`,
		"fallback": "meteocons:not-available",
	});
}

export default Component;
