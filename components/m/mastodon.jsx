import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzr0uqbuc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dzr0uqbuc"/>`,
		"fallback": "bi:mastodon",
	});
}

export default Component;
