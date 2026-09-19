import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mi7m7db4c.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mi7m7db4c"/>`,
		"fallback": "dinkie-icons:top-hat",
	});
}

export default Component;
