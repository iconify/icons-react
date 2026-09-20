import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxko3fnvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxko3fnvl"/>`,
		"fallback": "mynaui:panel-bottom-close-solid",
	});
}

export default Component;
