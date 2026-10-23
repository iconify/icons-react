import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pep0p17_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pep0p17_p"/>`,
		"fallback": "vadivam:text-align-justify-start",
	});
}

export default Component;
