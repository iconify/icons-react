import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pe7lczb9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pe7lczb9d"/>`,
		"fallback": "noviair:package-question",
	});
}

export default Component;
