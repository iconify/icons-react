import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ycchbsbfz.css';
import '../../css/n/n0pg1wbbc.css';

const viewBox = {"width":70,"height":51};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<ellipse class="ycchbsbfz"/><path clip-rule="evenodd" class="n0pg1wbbc"/>`,
		"fallback": "thesvg-color:openbootcamp",
	});
}

export default Component;
