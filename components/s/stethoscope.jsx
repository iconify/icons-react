import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-x5ajb7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n-x5ajb7p"/>`,
		"fallback": "reicon:stethoscope",
	});
}

export default Component;
