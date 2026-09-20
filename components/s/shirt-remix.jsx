import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/str0shbmn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="str0shbmn"/>`,
		"fallback": "streamline-sharp:shirt-remix",
	});
}

export default Component;
