import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h13zd3bqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h13zd3bqk"/>`,
		"fallback": "meteor-icons:quote-left",
	});
}

export default Component;
