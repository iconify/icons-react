import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojipf5b3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ojipf5b3v"/>`,
		"fallback": "nrk:some-tommelned",
	});
}

export default Component;
