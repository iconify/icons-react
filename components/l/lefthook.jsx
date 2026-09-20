import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oswpr8b4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oswpr8b4g"/>`,
		"fallback": "thesvg-color:lefthook",
	});
}

export default Component;
