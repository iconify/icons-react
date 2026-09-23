import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_hp_0bsk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_hp_0bsk"/>`,
		"fallback": "meteor-icons:preact",
	});
}

export default Component;
