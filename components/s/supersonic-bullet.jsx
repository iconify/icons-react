import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovmyto5xv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ovmyto5xv"/>`,
		"fallback": "game-icons:supersonic-bullet",
	});
}

export default Component;
