import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rt3n99m0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rt3n99m0c"/>`,
		"fallback": "streamline-sharp:virus-antivirus-solid",
	});
}

export default Component;
