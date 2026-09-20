import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/d/dte6tcehs.css';
import '../../css/l/l79c6k33t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="dte6tcehs"/><path class="l79c6k33t"/></g>`,
		"fallback": "streamline-sharp-color:refrigerator",
	});
}

export default Component;
