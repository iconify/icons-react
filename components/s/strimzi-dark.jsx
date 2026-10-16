import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_6enwb1c.css';

const viewBox = {"width":281.94,"height":323.44,"left":39.28,"top":-1.97};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m_6enwb1c"/>`,
		"fallback": "thesvg-color:strimzi-dark",
	});
}

export default Component;
