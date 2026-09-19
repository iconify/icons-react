import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/srky2gbgm.css';
import '../../css/n/nkc71p2ud.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="srky2gbgm"/><path class="nkc71p2ud"/>`,
		"fallback": "garden:translation-updated-fill-16",
	});
}

export default Component;
