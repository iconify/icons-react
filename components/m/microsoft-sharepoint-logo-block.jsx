import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o2xkt6ilm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o2xkt6ilm"/>`,
		"fallback": "streamline-logos:microsoft-sharepoint-logo-block",
	});
}

export default Component;
