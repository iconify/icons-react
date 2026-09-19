import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smw7apbjg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smw7apbjg"/>`,
		"fallback": "icon-park-outline:text-rotation-up",
	});
}

export default Component;
