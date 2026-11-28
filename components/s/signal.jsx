import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohpdf_bnx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ohpdf_bnx"/>`,
		"fallback": "noviair-light:signal",
	});
}

export default Component;
