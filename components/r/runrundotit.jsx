import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv79-2bkx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pv79-2bkx"/>`,
		"fallback": "thesvg-color:runrundotit",
	});
}

export default Component;
