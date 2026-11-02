import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w2gs35byi.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w2gs35byi"/>`,
		"fallback": "pinhead:people-sleeping-in-bunkbeds-in-eaved-gabled-shelter",
	});
}

export default Component;
