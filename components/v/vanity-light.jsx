import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sn26v467x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sn26v467x"/>`,
		"fallback": "mdi:vanity-light",
	});
}

export default Component;
