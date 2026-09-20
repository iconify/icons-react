import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jos6di89e.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jos6di89e"/>`,
		"fallback": "maki:waste-basket-11",
	});
}

export default Component;
