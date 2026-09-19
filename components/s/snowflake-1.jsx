import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kda-sptxe.css';

const viewBox = {"width":21,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kda-sptxe"/>`,
		"fallback": "fontisto:snowflake-1",
	});
}

export default Component;
