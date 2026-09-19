import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gl6-5w16k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gl6-5w16k"/>`,
		"fallback": "iconoir:watering-soil",
	});
}

export default Component;
