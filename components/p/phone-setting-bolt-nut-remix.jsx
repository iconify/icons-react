import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yzfzdbc4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yzfzdbc4h"/>`,
		"fallback": "streamline-sharp:phone-setting-bolt-nut-remix",
	});
}

export default Component;
