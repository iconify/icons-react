import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xiewx4bml.css';
import '../../css/t/ta73ae7hy.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xiewx4bml"/><path class="ta73ae7hy"/>`,
		"fallback": "tabler-flags:somalia",
	});
}

export default Component;
