import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lxz13rg8r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lxz13rg8r"/>`,
		"fallback": "game-icons:punch",
	});
}

export default Component;
