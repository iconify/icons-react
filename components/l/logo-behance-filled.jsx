import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2x4qxbpu.css';
import '../../css/g/gwq7723uj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k2x4qxbpu"/><path class="gwq7723uj"/>`,
		"fallback": "tdesign:logo-behance-filled",
	});
}

export default Component;
