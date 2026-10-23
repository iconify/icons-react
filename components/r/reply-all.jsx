import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jcbh0zl1p.css';
import '../../css/t/twsf6obea.css';
import '../../css/s/sp49qsbjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jcbh0zl1p"/><path class="twsf6obea"/><path class="sp49qsbjo"/></g>`,
		"fallback": "vadivam:reply-all",
	});
}

export default Component;
