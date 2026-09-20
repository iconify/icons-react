import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/utu1-bc8d.css';
import '../../css/i/i7qck1g8i.css';
import '../../css/g/go8csgqoe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="utu1-bc8d"/><path class="i7qck1g8i"/><path class="go8csgqoe"/></g>`,
		"fallback": "streamline-ultimate:money-wallet-open",
	});
}

export default Component;
