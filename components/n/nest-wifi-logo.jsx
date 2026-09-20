import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/j/jk2cgunvr.css';
import '../../css/r/r8qt-la5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="jk2cgunvr"/><path clip-rule="evenodd" class="r8qt-la5r"/></g>`,
		"fallback": "streamline-logos:nest-wifi-logo",
	});
}

export default Component;
