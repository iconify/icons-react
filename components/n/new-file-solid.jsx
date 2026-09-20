import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gu04kex_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gu04kex_j"/>`,
		"fallback": "streamline-sharp:new-file-solid",
	});
}

export default Component;
