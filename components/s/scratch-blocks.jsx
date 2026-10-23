import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sl87dzblb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sl87dzblb"/>`,
		"fallback": "vadivam:scratch-blocks",
	});
}

export default Component;
