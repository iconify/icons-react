import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g60hnciii.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g60hnciii"/>`,
		"fallback": "dinkie-icons:location-pin-small-filled",
	});
}

export default Component;
