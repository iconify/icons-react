import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gaiz3zbgy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gaiz3zbgy"/>`,
		"fallback": "selfhst:sidero-talos-dark",
	});
}

export default Component;
