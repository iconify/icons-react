import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvw82kb8r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvw82kb8r"/>`,
		"fallback": "game-icons:reload-gun-barrel",
	});
}

export default Component;
