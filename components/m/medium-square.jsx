import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffxjue_mv.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ffxjue_mv"/>`,
		"fallback": "ant-design:medium-square",
	});
}

export default Component;
