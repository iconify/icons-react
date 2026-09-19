import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aj7n45bld.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aj7n45bld"/>`,
		"fallback": "fa-solid:skull-crossbones",
	});
}

export default Component;
