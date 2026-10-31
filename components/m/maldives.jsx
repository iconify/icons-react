import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gv8upmbsd.css';
import '../../css/d/dv__-hbaw.css';
import '../../css/r/rkeykmpmz.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gv8upmbsd"/><path class="dv__-hbaw"/><path class="rkeykmpmz"/>`,
		"fallback": "tabler-flags:maldives",
	});
}

export default Component;
