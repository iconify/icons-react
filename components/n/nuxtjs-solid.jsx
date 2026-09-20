import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rpt_g1bgn.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rpt_g1bgn"/>`,
		"fallback": "teenyicons:nuxtjs-solid",
	});
}

export default Component;
