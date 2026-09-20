import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5fs8vb5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l5fs8vb5a"/>`,
		"fallback": "reicon:map-arrow-left",
	});
}

export default Component;
