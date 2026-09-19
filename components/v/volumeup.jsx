import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ce5j2rbzq.css';

const viewBox = {"width":717,"height":664};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ce5j2rbzq"/>`,
		"fallback": "ls:volumeup",
	});
}

export default Component;
