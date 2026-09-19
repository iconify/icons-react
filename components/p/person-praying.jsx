import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfw-isbtr.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cfw-isbtr"/>`,
		"fallback": "fa7-solid:person-praying",
	});
}

export default Component;
