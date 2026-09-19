import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/quriywp9a.css';

const viewBox = {"width":33,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="quriywp9a"/>`,
		"fallback": "fontisto:opencart",
	});
}

export default Component;
