import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sr_un4bow.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sr_un4bow"/>`,
		"fallback": "file-icons:polymer",
	});
}

export default Component;
