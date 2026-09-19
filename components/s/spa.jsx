import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahq26kfpl.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ahq26kfpl"/>`,
		"fallback": "fa6-solid:spa",
	});
}

export default Component;
