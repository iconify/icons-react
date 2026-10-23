import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-qtgu_hn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-qtgu_hn"/>`,
		"fallback": "vadivam:text-quote",
	});
}

export default Component;
