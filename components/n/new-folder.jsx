import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r8y36bc0d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r8y36bc0d"/>`,
		"fallback": "streamline-plump:new-folder",
	});
}

export default Component;
