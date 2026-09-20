import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g307o3kzp.css';
import '../../css/u/ubccq2blx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g307o3kzp"/><path class="ubccq2blx"/>`,
		"fallback": "selfhst:sofe",
	});
}

export default Component;
