import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s8r_ro_4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s8r_ro_4f"/>`,
		"fallback": "simple-icons:newapi",
	});
}

export default Component;
