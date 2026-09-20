import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g67ggebyw.css';
import '../../css/g/geuo8cbkl.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g67ggebyw"/><path class="geuo8cbkl"/>`,
		"fallback": "maki:shoe-11",
	});
}

export default Component;
