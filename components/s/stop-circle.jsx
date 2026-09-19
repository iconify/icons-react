import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pm020vgho.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pm020vgho"/>`,
		"fallback": "fa7-regular:stop-circle",
	});
}

export default Component;
