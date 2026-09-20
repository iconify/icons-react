import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xmbrdxb3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xmbrdxb3n"/>`,
		"fallback": "streamline-sharp:phone-setting-solid",
	});
}

export default Component;
