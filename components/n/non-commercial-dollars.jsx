import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/t/tejuo1bjd.css';
import '../../css/o/oli0o5buy.css';
import '../../css/g/gufbzbcop.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="tejuo1bjd"/><path class="oli0o5buy"/><path class="gufbzbcop"/></g>`,
		"fallback": "streamline-sharp-color:non-commercial-dollars",
	});
}

export default Component;
