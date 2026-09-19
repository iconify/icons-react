import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/go71j8bmb.css';

const viewBox = {"width":311,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="go71j8bmb"/>`,
		"fallback": "file-icons:mirah",
	});
}

export default Component;
