import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-tu9rzsd.css';
import '../../css/m/mnd7hcbix.css';
import '../../css/k/k-q3_rj-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-tu9rzsd"/><path class="mnd7hcbix"/><path clip-rule="evenodd" class="k-q3_rj-a"/>`,
		"fallback": "solar:panels-top-right-bold",
	});
}

export default Component;
