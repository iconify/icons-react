import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/el376fjhw.css';
import '../../css/p/pvs43e5ny.css';

const viewBox = {"width":1052,"height":1052};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="el376fjhw"/><path class="pvs43e5ny"/>`,
		"fallback": "thesvg-color:javascript",
	});
}

export default Component;
