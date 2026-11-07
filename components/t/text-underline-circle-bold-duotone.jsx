import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtmuzrg2o.css';
import '../../css/u/u9tzwj7ok.css';
import '../../css/b/bzy5eobti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xtmuzrg2o"/><path class="u9tzwj7ok"/><path class="bzy5eobti"/>`,
		"fallback": "solar:text-underline-circle-bold-duotone",
	});
}

export default Component;
