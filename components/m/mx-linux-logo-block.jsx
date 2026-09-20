import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pw4q79iux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pw4q79iux"/>`,
		"fallback": "streamline-logos:mx-linux-logo-block",
	});
}

export default Component;
