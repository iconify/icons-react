import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jomr-ybjk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jomr-ybjk"/>`,
		"fallback": "thesvg-color:pydantic",
	});
}

export default Component;
