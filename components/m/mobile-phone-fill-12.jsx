import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g0tmkpb-w.css';
import '../../css/f/f_i5tj91f.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="g0tmkpb-w"/><path class="f_i5tj91f"/>`,
		"fallback": "garden:mobile-phone-fill-12",
	});
}

export default Component;
