import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rc5tu7bnj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rc5tu7bnj"/>`,
		"fallback": "streamline-sharp:recycle-bin-2-remix",
	});
}

export default Component;
