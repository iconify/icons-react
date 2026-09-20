import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sjmg4z__o.css';
import '../../css/d/d1jue8bvv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sjmg4z__o"/><path class="d1jue8bvv"/>`,
		"fallback": "streamline-pixel:pet-animals-turtle",
	});
}

export default Component;
