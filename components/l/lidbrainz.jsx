import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hs11npbhs.css';
import '../../css/d/dyttjhj6k.css';
import '../../css/i/ilz0n-b6y.css';
import '../../css/c/c-gqvg2ew.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hs11npbhs"/><path class="dyttjhj6k"/><path class="ilz0n-b6y"/><path class="c-gqvg2ew"/>`,
		"fallback": "selfhst:lidbrainz",
	});
}

export default Component;
