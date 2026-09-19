import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gac6sofbz.css';

const viewBox = {"width":19,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gac6sofbz"/>`,
		"fallback": "fontisto:periscope",
	});
}

export default Component;
