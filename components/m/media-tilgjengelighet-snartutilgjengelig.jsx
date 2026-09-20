import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fklby8bzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fklby8bzo"/>`,
		"fallback": "nrk:media-tilgjengelighet-snartutilgjengelig",
	});
}

export default Component;
