import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdgvuia_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdgvuia_f"/>`,
		"fallback": "grommet-icons:shift",
	});
}

export default Component;
