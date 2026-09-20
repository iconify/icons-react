import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ush4msblo.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ush4msblo"/>`,
		"fallback": "maki:picnic-site-15",
	});
}

export default Component;
