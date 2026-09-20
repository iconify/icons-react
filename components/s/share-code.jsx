import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/b/bpcxl1bfn.css';
import '../../css/s/ssf9uab9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="bpcxl1bfn"/><path class="ssf9uab9k"/></g>`,
		"fallback": "streamline-sharp-color:share-code",
	});
}

export default Component;
