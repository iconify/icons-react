import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d7jj56biu.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d7jj56biu"/>`,
		"fallback": "maki:village-11",
	});
}

export default Component;
