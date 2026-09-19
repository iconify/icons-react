import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw06c_omj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yw06c_omj"/>`,
		"fallback": "carbon:user-access",
	});
}

export default Component;
