import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_da3ubjp.css';
import '../../css/z/znrl4yb1y.css';
import '../../css/o/of9kz4-jf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="r_da3ubjp"><path class="znrl4yb1y"/><path class="of9kz4-jf"/></g>`,
		"fallback": "material-icon-theme:mercurial",
	});
}

export default Component;
