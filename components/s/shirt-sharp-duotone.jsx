import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tttpw3btv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tttpw3btv"/>`,
		"fallback": "keyline-icons:shirt-sharp-duotone",
	});
}

export default Component;
