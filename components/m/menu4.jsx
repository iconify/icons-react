import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-x8h-psw.css';

const viewBox = {"width":22,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-x8h-psw"/>`,
		"fallback": "icomoon-free:menu4",
	});
}

export default Component;
