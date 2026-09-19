import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gf_7njbdx.css';

const viewBox = {"width":22,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gf_7njbdx"/>`,
		"fallback": "fontisto:male",
	});
}

export default Component;
