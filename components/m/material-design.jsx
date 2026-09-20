import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/na_e-8bbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="na_e-8bbq"/>`,
		"fallback": "thesvg-color:material-design",
	});
}

export default Component;
