import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ehrh8tb6j.css';
import '../../css/c/chmm2dpgi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ehrh8tb6j"/><circle class="chmm2dpgi"/>`,
		"fallback": "ooui:user-rights-ltr",
	});
}

export default Component;
