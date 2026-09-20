import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nlvshwb_d.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nlvshwb_d"/>`,
		"fallback": "material-icon-theme:twig",
	});
}

export default Component;
