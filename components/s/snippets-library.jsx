import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mqaun3icq.css';
import '../../css/b/bk6zi09yk.css';
import '../../css/g/gi2crzbpq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVG8hn2RcFR" x1="256" x2="256" y1="514" y2="2" gradientTransform="matrix(1 0 0 -1 0 514)" gradientUnits="userSpaceOnUse"><stop offset="0" class="mqaun3icq"/><stop offset="1"/></linearGradient><path fill="url(#SVG8hn2RcFR)" class="bk6zi09yk"/><path class="gi2crzbpq"/>`,
		"fallback": "selfhst:snippets-library",
	});
}

export default Component;
