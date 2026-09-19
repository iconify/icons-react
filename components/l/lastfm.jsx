import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3mazih7b.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3mazih7b"/>`,
		"fallback": "entypo-social:lastfm",
	});
}

export default Component;
