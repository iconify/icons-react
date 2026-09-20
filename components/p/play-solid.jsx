import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/powm5n7aj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="powm5n7aj"/>`,
		"fallback": "stash:play-solid",
	});
}

export default Component;
