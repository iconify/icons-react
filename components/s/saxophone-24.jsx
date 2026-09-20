import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/updm7mb5b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="updm7mb5b"/>`,
		"fallback": "qlementine-icons:saxophone-24",
	});
}

export default Component;
