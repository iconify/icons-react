import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_5nglblb.css';

const viewBox = {"width":1000,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_5nglblb"/>`,
		"fallback": "websymbol:target",
	});
}

export default Component;
