import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z13_dp0su.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z13_dp0su"/>`,
		"fallback": "qlementine-icons:on-off-16",
	});
}

export default Component;
