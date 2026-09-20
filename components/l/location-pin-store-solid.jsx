import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/om1bhbc1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="om1bhbc1x"/>`,
		"fallback": "streamline-sharp:location-pin-store-solid",
	});
}

export default Component;
