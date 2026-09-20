import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o5pil4b6d.css';
import '../../css/v/v5wzyp5ut.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o5pil4b6d"/><circle class="v5wzyp5ut"/>`,
		"fallback": "lets-icons:view-alt-duotone",
	});
}

export default Component;
