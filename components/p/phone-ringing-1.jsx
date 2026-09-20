import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vgy6n9bxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vgy6n9bxw"/>`,
		"fallback": "streamline-sharp:phone-ringing-1",
	});
}

export default Component;
