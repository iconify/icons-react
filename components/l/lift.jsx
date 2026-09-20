import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/g/gf9el8b3x.css';
import '../../css/l/lglw2iyzz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="gf9el8b3x"/><path class="lglw2iyzz"/></g>`,
		"fallback": "streamline-sharp-color:lift",
	});
}

export default Component;
