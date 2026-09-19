import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s1byepbvy.css';

const viewBox = {"width":15,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s1byepbvy"/>`,
		"fallback": "fontisto:venus",
	});
}

export default Component;
