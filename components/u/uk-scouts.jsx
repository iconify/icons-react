import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bto0-4bac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bto0-4bac"/>`,
		"fallback": "cbi:uk-scouts",
	});
}

export default Component;
