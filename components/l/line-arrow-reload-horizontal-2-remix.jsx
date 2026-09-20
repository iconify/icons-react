import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tntdz1o6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tntdz1o6j"/>`,
		"fallback": "streamline-sharp:line-arrow-reload-horizontal-2-remix",
	});
}

export default Component;
