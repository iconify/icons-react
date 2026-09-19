import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/li8dkqbxc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="li8dkqbxc"/>`,
		"fallback": "iconoir:triangle-flag-two-stripes",
	});
}

export default Component;
