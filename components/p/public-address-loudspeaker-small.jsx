import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fuuzlabau.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fuuzlabau"/>`,
		"fallback": "dinkie-icons:public-address-loudspeaker-small",
	});
}

export default Component;
