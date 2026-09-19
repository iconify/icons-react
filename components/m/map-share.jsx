import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7ts5db7w.css';
import '../../css/g/gu3211y0f.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w7ts5db7w"/><path class="gu3211y0f"/>`,
		"fallback": "gis:map-share",
	});
}

export default Component;
