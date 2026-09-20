import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i242pgvho.css';
import '../../css/i/ijptld2hs.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i242pgvho"/><path class="ijptld2hs"/>`,
		"fallback": "thesvg-color:junit",
	});
}

export default Component;
