import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/skrh6_4wv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="skrh6_4wv"/>`,
		"fallback": "token:mnt",
	});
}

export default Component;
