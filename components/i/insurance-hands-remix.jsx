import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pkh-m2dpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pkh-m2dpk"/>`,
		"fallback": "streamline-sharp:insurance-hands-remix",
	});
}

export default Component;
