import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b8cg_fa7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b8cg_fa7l"/>`,
		"fallback": "akar-icons:umbrella",
	});
}

export default Component;
