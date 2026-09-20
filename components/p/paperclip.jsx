import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j27j2c08b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j27j2c08b"/>`,
		"fallback": "meteor-icons:paperclip",
	});
}

export default Component;
