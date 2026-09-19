import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/okph2cb0o.css';
import '../../css/r/r-cemmhlw.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="okph2cb0o"/><path class="r-cemmhlw"/>`,
		"fallback": "foundation:torsos",
	});
}

export default Component;
