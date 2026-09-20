import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fa_2v2l-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fa_2v2l-a"/>`,
		"fallback": "stash:times-light",
	});
}

export default Component;
