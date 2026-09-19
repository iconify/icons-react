import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lyrm0abvf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lyrm0abvf"/>`,
		"fallback": "game-icons:war-bonnet",
	});
}

export default Component;
