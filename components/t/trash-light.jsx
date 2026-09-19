import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnfa_fb-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnfa_fb-f"/>`,
		"fallback": "iconamoon:trash-light",
	});
}

export default Component;
