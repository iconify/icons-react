import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgt426vre.css';
import '../../css/n/n9h5yebjh.css';
import '../../css/k/k_lrs8b-y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hgt426vre"/><path class="n9h5yebjh"/><path class="k_lrs8b-y"/>`,
		"fallback": "selfhst:steamgriddb-dark",
	});
}

export default Component;
