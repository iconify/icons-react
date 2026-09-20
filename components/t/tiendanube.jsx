import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q22_55b6f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q22_55b6f"/>`,
		"fallback": "nimbus:tiendanube",
	});
}

export default Component;
