import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/csol4q46k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="csol4q46k"/>`,
		"fallback": "streamline-sharp:page-break",
	});
}

export default Component;
