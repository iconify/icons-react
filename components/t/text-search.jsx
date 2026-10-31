import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/f/flda0ybka.css';
import '../../css/e/etcm3bbvq.css';
import '../../css/k/kh3r6ssqc.css';
import '../../css/w/wwsea4b-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="flda0ybka wm-shadow"/><path class="etcm3bbvq wm-shadow"/><path class="kh3r6ssqc"/><path class="wwsea4b-l"/></g>`,
		"fallback": "withicons-brutal:text-search",
	});
}

export default Component;
