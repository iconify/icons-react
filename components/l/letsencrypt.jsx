import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahmj-4bkk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ahmj-4bkk"/>`,
		"fallback": "simple-icons:letsencrypt",
	});
}

export default Component;
