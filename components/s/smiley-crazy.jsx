import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9n2fpbvo.css';
import '../../css/h/hpi6sokwb.css';
import '../../css/r/rwtfg_k-x.css';
import '../../css/x/x1zr3i0tt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y9n2fpbvo"/><path class="hpi6sokwb"/><path class="rwtfg_k-x"/><path class="x1zr3i0tt"/>`,
		"fallback": "streamline-freehand:smiley-crazy",
	});
}

export default Component;
