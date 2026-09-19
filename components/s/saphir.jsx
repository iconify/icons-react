import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhfm-jb0i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fhfm-jb0i"/>`,
		"fallback": "game-icons:saphir",
	});
}

export default Component;
