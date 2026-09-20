import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9irnebku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n9irnebku"/>`,
		"fallback": "streamline-sharp:phone-vibrate-remix",
	});
}

export default Component;
