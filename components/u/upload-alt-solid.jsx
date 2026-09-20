import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j28299b9j.css';
import '../../css/v/vvnnjvbmq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j28299b9j"/><path class="vvnnjvbmq"/>`,
		"fallback": "pixel:upload-alt-solid",
	});
}

export default Component;
