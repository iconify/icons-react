import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukm9jj2re.css';
import '../../css/e/expip9fte.css';
import '../../css/y/yaytktb8x.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGs8jLFeoN"><g class="ukm9jj2re"><circle class="expip9fte"/><path class="yaytktb8x"/></g></mask></defs><path mask="url(#SVGs8jLFeoN)" class="w49j0rbvv"/>`,
		"fallback": "lets-icons:view-alt-duotone-line",
	});
}

export default Component;
