import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbn1uy2ld.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbn1uy2ld"/>`,
		"fallback": "oui:nav-get-started",
	});
}

export default Component;
