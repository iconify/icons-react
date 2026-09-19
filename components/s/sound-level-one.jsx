import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lcfp05mmm.css';

const viewBox = {"width":416,"height":472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lcfp05mmm"/>`,
		"fallback": "ps:sound-level-one",
	});
}

export default Component;
