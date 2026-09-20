import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bp5hlb-sz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bp5hlb-sz"/>`,
		"fallback": "keyline-icons:list-collapse-sharp",
	});
}

export default Component;
