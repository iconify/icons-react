import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwlb_qanr.css';
import '../../css/z/zt-7pdbvz.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jwlb_qanr"/><path class="zt-7pdbvz"/>`,
		"fallback": "lineicons:photos",
	});
}

export default Component;
