import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ta6jhe_wk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ta6jhe_wk"/>`,
		"fallback": "streamline-logos:kik-logo-1-solid",
	});
}

export default Component;
