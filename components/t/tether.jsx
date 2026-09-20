import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/or-9fcc4e.css';
import '../../css/t/tsrj5epuh.css';

const viewBox = {"width":339.43,"height":295.27};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="or-9fcc4e"/><path class="tsrj5epuh"/>`,
		"fallback": "thesvg-color:tether",
	});
}

export default Component;
