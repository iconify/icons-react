import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r954v1bkj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r954v1bkj"/>`,
		"fallback": "streamline-logos:kodi-logo-solid",
	});
}

export default Component;
