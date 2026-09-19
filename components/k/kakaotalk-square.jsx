import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cgak4ob9x.css';

const viewBox = {"width":1792,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cgak4ob9x"/>`,
		"fallback": "vs:kakaotalk-square",
	});
}

export default Component;
