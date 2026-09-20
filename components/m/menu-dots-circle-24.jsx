import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jf3hkbb1h.css';
import '../../css/u/u8acicc4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jf3hkbb1h"/><path clip-rule="evenodd" class="u8acicc4f"/>`,
		"fallback": "qlementine-icons:menu-dots-circle-24",
	});
}

export default Component;
