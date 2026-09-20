import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fyk9cabui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fyk9cabui"/>`,
		"fallback": "streamline-sharp-color:invisible-2",
	});
}

export default Component;
