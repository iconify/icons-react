import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bdwm_7bib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bdwm_7bib"/>`,
		"fallback": "noviair-light:life-buoy",
	});
}

export default Component;
