import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lenqjybbl.css';
import '../../css/s/sizgdyb9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lenqjybbl"/><path class="sizgdyb9a"/>`,
		"fallback": "thesvg-color:smithery",
	});
}

export default Component;
