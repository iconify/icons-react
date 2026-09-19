import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s04mc_b4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s04mc_b4d"/>`,
		"fallback": "griddy-icons:layers",
	});
}

export default Component;
