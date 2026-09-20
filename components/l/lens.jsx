import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/t/tejuo1bjd.css';
import '../../css/w/w3pjnfcgv.css';
import '../../css/k/kv1gi7bvd.css';
import '../../css/q/q9h4eqg1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="tejuo1bjd"/><path class="w3pjnfcgv"/><path class="kv1gi7bvd"/><path class="q9h4eqg1e"/></g>`,
		"fallback": "streamline-sharp-color:lens",
	});
}

export default Component;
