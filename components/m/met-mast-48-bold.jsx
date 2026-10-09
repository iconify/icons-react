import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lnyb1hbmp.css';
import '../../css/y/yh_jzue5r.css';
import '../../css/a/afh_lob9l.css';
import '../../css/y/yd64m07av.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lnyb1hbmp"/><path class="yh_jzue5r"/><path class="afh_lob9l"/><path class="yd64m07av"/>`,
		"fallback": "energy-icons:met-mast-48-bold",
	});
}

export default Component;
