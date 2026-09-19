import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/btgo_69aw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="btgo_69aw"/>`,
		"fallback": "griddy-icons:printer-filled",
	});
}

export default Component;
