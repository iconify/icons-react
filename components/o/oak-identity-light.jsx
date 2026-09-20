import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ru6sgpi9r.css';
import '../../css/a/aunmnqb4l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ru6sgpi9r"/><path class="aunmnqb4l"/>`,
		"fallback": "selfhst:oak-identity-light",
	});
}

export default Component;
