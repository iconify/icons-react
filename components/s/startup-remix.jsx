import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9nmr3btp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v9nmr3btp"/>`,
		"fallback": "streamline:startup-remix",
	});
}

export default Component;
