import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/skhce2wwk.css';

const viewBox = {"width":256,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="skhce2wwk"/>`,
		"fallback": "ps:man",
	});
}

export default Component;
