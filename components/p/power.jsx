import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jdj57bb1p.css';

const viewBox = {"width":22,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jdj57bb1p"/>`,
		"fallback": "fontisto:power",
	});
}

export default Component;
