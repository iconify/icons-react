import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7vw7y9yo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u7vw7y9yo"/>`,
		"fallback": "noviair:tree-heart",
	});
}

export default Component;
