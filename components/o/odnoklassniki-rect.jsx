import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6riy61-f.css';

const viewBox = {"width":1000,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s6riy61-f"/>`,
		"fallback": "websymbol:odnoklassniki-rect",
	});
}

export default Component;
