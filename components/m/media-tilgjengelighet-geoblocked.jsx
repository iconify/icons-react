import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hn1teccco.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hn1teccco"/>`,
		"fallback": "nrk:media-tilgjengelighet-geoblocked",
	});
}

export default Component;
