import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kf3aygbvk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kf3aygbvk"/>`,
		"fallback": "thesvg-color:mazda",
	});
}

export default Component;
