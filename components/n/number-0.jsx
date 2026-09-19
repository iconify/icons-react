import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/biokecb2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="biokecb2h"/>`,
		"fallback": "iconamoon:number-0",
	});
}

export default Component;
