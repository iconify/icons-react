import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgqlzrbgt.css';

const viewBox = {"width":14,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zgqlzrbgt"/>`,
		"fallback": "fontisto:text-width",
	});
}

export default Component;
