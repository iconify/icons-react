import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fje0ntbbb.css';
import '../../css/z/zjmdfw3ya.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="fje0ntbbb"/><path class="zjmdfw3ya"/>`,
		"fallback": "selfhst:omnivore",
	});
}

export default Component;
