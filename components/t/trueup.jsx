import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hiywul6jz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hiywul6jz"/>`,
		"fallback": "thesvg:trueup",
	});
}

export default Component;
