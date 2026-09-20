import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y02hk3jmi.css';
import '../../css/s/samcq3xfd.css';
import '../../css/m/m9vsufp9g.css';
import '../../css/u/udmajcboi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y02hk3jmi"/><path class="samcq3xfd"/><path class="m9vsufp9g"/><path class="udmajcboi"/>`,
		"fallback": "selfhst:ollama-dark",
	});
}

export default Component;
