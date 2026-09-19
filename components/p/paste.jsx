import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k52lsdbdz.css';

const viewBox = {"width":21,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k52lsdbdz"/>`,
		"fallback": "fontisto:paste",
	});
}

export default Component;
