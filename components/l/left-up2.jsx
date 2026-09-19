import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/scu44gudw.css';
import '../../css/z/zfka66bxw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="scu44gudw"/><path class="zfka66bxw"/>`,
		"fallback": "flat-color-icons:left-up2",
	});
}

export default Component;
