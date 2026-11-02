import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u9x30lekw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u9x30lekw"/>`,
		"fallback": "mingcute:layout-9-line",
	});
}

export default Component;
