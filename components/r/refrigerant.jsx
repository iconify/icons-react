import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xsyu_vb3p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xsyu_vb3p"/>`,
		"fallback": "carbon:refrigerant",
	});
}

export default Component;
