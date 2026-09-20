import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wo0bw59ba.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wo0bw59ba"/>`,
		"fallback": "temaki:tram-side",
	});
}

export default Component;
