import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rb_9edcci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rb_9edcci"/>`,
		"fallback": "si:quote-fill",
	});
}

export default Component;
