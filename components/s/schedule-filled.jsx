import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zo9ugs2zi.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zo9ugs2zi"/>`,
		"fallback": "ant-design:schedule-filled",
	});
}

export default Component;
