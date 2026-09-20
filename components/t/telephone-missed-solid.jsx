import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tnpo3gbxc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tnpo3gbxc"/>`,
		"fallback": "mynaui:telephone-missed-solid",
	});
}

export default Component;
