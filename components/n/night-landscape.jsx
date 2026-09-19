import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lm6odxb_u.css';
import '../../css/r/rivw31b0j.css';
import '../../css/u/u4hlkiabp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lm6odxb_u"/><path class="rivw31b0j"/><path class="u4hlkiabp"/>`,
		"fallback": "flat-color-icons:night-landscape",
	});
}

export default Component;
