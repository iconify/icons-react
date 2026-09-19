import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lu7m2xbxv.css';
import '../../css/v/v999jcc3z.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lu7m2xbxv"/><path class="v999jcc3z"/>`,
		"fallback": "foundation:torsos-all",
	});
}

export default Component;
