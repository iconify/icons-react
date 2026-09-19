import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g2skmjbzc.css';

const viewBox = {"width":400,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g2skmjbzc"/>`,
		"fallback": "ps:krop",
	});
}

export default Component;
