import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pcu911z9m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pcu911z9m"/>`,
		"fallback": "noviair-light:jar-plus",
	});
}

export default Component;
