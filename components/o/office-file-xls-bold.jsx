import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vtl1ki70z.css';
import '../../css/q/qlpyw3puh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vtl1ki70z"/><path class="qlpyw3puh"/>`,
		"fallback": "streamline-ultimate:office-file-xls-bold",
	});
}

export default Component;
