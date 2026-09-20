import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcz9gmb8w.css';
import '../../css/v/vi3jb3b5p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wcz9gmb8w"/><path class="vi3jb3b5p"/>`,
		"fallback": "selfhst:lunalytics",
	});
}

export default Component;
