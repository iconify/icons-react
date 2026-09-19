import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rxpkz-b5o.css';
import '../../css/i/il9-ih3wv.css';
import '../../css/f/fbvloacdy.css';
import '../../css/x/x5jv-2b5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="rxpkz-b5o"/><path class="il9-ih3wv"/><path class="fbvloacdy"/><path class="x5jv-2b5o"/></g>`,
		"fallback": "hugeicons:presentation-online",
	});
}

export default Component;
