import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yce_ecd9i.css';
import '../../css/d/dasmli_2u.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yce_ecd9i"/><circle class="dasmli_2u"/>`,
		"fallback": "ooui:tag-ltr",
	});
}

export default Component;
