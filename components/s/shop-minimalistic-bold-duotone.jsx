import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vl7l5cbrw.css';
import '../../css/n/nur9zm4bq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vl7l5cbrw"/><path class="nur9zm4bq"/>`,
		"fallback": "solar:shop-minimalistic-bold-duotone",
	});
}

export default Component;
