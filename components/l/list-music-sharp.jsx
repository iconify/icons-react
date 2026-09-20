import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ii2j4fp2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ii2j4fp2a"/>`,
		"fallback": "keyline-icons:list-music-sharp",
	});
}

export default Component;
