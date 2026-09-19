import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n7vtcu26a.css';

const viewBox = {"width":384,"height":472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n7vtcu26a"/>`,
		"fallback": "ps:rewind",
	});
}

export default Component;
