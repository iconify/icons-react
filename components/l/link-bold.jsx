import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ln1f_4blw.css';
import '../../css/o/o1li7xbek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ln1f_4blw"/><path class="o1li7xbek"/>`,
		"fallback": "solar:link-bold",
	});
}

export default Component;
