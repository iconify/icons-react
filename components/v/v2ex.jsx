import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ze__gra_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ze__gra_c"/>`,
		"fallback": "simple-icons:v2ex",
	});
}

export default Component;
