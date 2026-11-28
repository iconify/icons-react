import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tnm_kko2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tnm_kko2o"/>`,
		"fallback": "noviair:newspaper-star",
	});
}

export default Component;
