import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/net3pwbml.css';
import '../../css/b/bj-8l43jw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="net3pwbml"/><path class="bj-8l43jw"/></g>`,
		"fallback": "tdesign:map-search",
	});
}

export default Component;
