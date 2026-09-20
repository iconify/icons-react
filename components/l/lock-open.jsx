import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lvif2zbuo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lvif2zbuo"/>`,
		"fallback": "mdi-light:lock-open",
	});
}

export default Component;
