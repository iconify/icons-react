import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ldk6ger7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ldk6ger7m"/>`,
		"fallback": "si:remove-from-library-line",
	});
}

export default Component;
