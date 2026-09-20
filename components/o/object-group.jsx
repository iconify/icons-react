import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m6wl880iz.css';
import '../../css/g/gzs8_jbiw.css';
import '../../css/i/i5vl1gfpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m6wl880iz"/><path class="gzs8_jbiw"/><path class="i5vl1gfpx"/>`,
		"fallback": "uim:object-group",
	});
}

export default Component;
