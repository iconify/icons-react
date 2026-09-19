import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gum-icegm.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gum-icegm"/>`,
		"fallback": "dinkie-icons:speech-balloon-small-filled",
	});
}

export default Component;
