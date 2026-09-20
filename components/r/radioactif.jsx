import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw4f8xb5j.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw4f8xb5j"/>`,
		"fallback": "picon:radioactif",
	});
}

export default Component;
