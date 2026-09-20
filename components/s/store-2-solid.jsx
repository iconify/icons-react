import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eppuz1lar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eppuz1lar"/>`,
		"fallback": "streamline-sharp:store-2-solid",
	});
}

export default Component;
