import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_ldfj9ec.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n_ldfj9ec"/>`,
		"fallback": "maki:picnic-site-11",
	});
}

export default Component;
