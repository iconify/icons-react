import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jo0ilnblt.css';
import '../../css/p/pdeg3lb0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jo0ilnblt"/><path class="pdeg3lb0a"/>`,
		"fallback": "token:stargaze",
	});
}

export default Component;
