import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8asflbrw.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x8asflbrw"/>`,
		"fallback": "fa7-solid:radio",
	});
}

export default Component;
