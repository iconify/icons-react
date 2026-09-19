import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tyt5j2bxk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tyt5j2bxk"/>`,
		"fallback": "carbon:schematics",
	});
}

export default Component;
