import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv_hji6de.css';
import '../../css/z/z-85vlbmo.css';
import '../../css/x/x41xvfi0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pv_hji6de"/><path class="z-85vlbmo"/><path class="x41xvfi0c"/>`,
		"fallback": "solar:question-square-bold-duotone",
	});
}

export default Component;
