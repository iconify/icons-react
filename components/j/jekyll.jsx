import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/riwpk_voa.css';

const viewBox = {"width":14,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="riwpk_voa"/>`,
		"fallback": "fontisto:jekyll",
	});
}

export default Component;
