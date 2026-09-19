import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ugyrw2brw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ugyrw2brw"/>`,
		"fallback": "hugeicons:shuffle",
	});
}

export default Component;
