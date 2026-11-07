import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtmuzrg2o.css';
import '../../css/v/v35_57ben.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xtmuzrg2o"/><path clip-rule="evenodd" class="v35_57ben"/>`,
		"fallback": "solar:text-bold-circle-bold-duotone",
	});
}

export default Component;
