import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jix789b5n.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jix789b5n"/>`,
		"fallback": "fluent-mdl2:public-contact-card-mirrored",
	});
}

export default Component;
