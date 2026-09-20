import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iiklc0b1i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iiklc0b1i"/>`,
		"fallback": "selfhst:musicbrainz-picard-light",
	});
}

export default Component;
