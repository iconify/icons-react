import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vnv1cu90a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vnv1cu90a"/>`,
		"fallback": "streamline-sharp:layout-window-25-remix",
	});
}

export default Component;
