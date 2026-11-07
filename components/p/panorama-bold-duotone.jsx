import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iln029b4a.css';
import '../../css/t/twczvmatf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="iln029b4a"/><path class="twczvmatf"/>`,
		"fallback": "solar:panorama-bold-duotone",
	});
}

export default Component;
