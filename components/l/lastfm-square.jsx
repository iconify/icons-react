import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wod8yol2x.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wod8yol2x"/>`,
		"fallback": "fa:lastfm-square",
	});
}

export default Component;
