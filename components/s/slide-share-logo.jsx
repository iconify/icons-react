import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/t/t_i4dtsnp.css';
import '../../css/z/zkxt3mbow.css';
import '../../css/i/i6l4bjb4l.css';
import '../../css/d/dowb2e7my.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="t_i4dtsnp"/><path class="zkxt3mbow"/><path class="i6l4bjb4l"/><path class="dowb2e7my"/></g>`,
		"fallback": "streamline-logos:slide-share-logo",
	});
}

export default Component;
