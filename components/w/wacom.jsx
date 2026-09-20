import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fqbh797_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fqbh797_i"/>`,
		"fallback": "simple-icons:wacom",
	});
}

export default Component;
