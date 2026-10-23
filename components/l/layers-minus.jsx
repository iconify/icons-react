import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/if9075ehf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="if9075ehf"/>`,
		"fallback": "vadivam:layers-minus",
	});
}

export default Component;
