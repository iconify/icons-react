import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l84h-5chk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l84h-5chk"/>`,
		"fallback": "keyline-icons:sticky-note-plus-sharp",
	});
}

export default Component;
