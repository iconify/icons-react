import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-v1cdcgt.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-v1cdcgt"/>`,
		"fallback": "jam:stamp-f",
	});
}

export default Component;
