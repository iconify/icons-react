import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0dvj9g4i.css';
import '../../css/i/iv3xvpmgh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z0dvj9g4i"/><path class="iv3xvpmgh"/>`,
		"fallback": "energy-icons:parking-48",
	});
}

export default Component;
