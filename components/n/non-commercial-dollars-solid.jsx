import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbu37c04o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bbu37c04o"/>`,
		"fallback": "streamline-sharp:non-commercial-dollars-solid",
	});
}

export default Component;
