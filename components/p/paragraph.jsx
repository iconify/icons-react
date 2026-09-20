import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kje-6ph0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kje-6ph0j"/>`,
		"fallback": "uit:paragraph",
	});
}

export default Component;
