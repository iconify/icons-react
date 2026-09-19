import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s71_e0bzr.css';

const viewBox = {"width":624,"height":737};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s71_e0bzr"/>`,
		"fallback": "ls:save",
	});
}

export default Component;
