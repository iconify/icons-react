import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v65n5tbtm.css';
import '../../css/p/p06wdrbrh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v65n5tbtm"/><path class="p06wdrbrh"/>`,
		"fallback": "mage:reddit",
	});
}

export default Component;
