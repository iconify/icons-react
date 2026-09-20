import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g80a0ivmu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g80a0ivmu"/>`,
		"fallback": "reicon:turntable",
	});
}

export default Component;
