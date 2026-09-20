import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n4bhd5b_z.css';

const viewBox = {"width":24,"height":24,"left":-6,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n4bhd5b_z"/>`,
		"fallback": "jam:thunder",
	});
}

export default Component;
