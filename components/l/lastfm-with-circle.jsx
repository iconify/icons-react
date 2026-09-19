import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lgwktoj5q.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lgwktoj5q"/>`,
		"fallback": "entypo-social:lastfm-with-circle",
	});
}

export default Component;
