import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtmnc00av.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mtmnc00av"/>`,
		"fallback": "cbi:trinkgut",
	});
}

export default Component;
