import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bb2cbhbmy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bb2cbhbmy"/>`,
		"fallback": "streamline-plump:new-folder-solid",
	});
}

export default Component;
