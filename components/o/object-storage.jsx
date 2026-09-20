import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvk3n9b5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fvk3n9b5h"/>`,
		"fallback": "tdesign:object-storage",
	});
}

export default Component;
