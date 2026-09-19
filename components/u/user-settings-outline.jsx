import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cy65xwmuv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cy65xwmuv"/>`,
		"fallback": "flowbite:user-settings-outline",
	});
}

export default Component;
