import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4maro1xq.css';
import '../../css/y/y8xv1v9hl.css';
import '../../css/t/t4wa6sbad.css';
import '../../css/z/zkc3a6ybf.css';
import '../../css/p/pycxazbfr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4maro1xq"/><path class="y8xv1v9hl"/><path class="t4wa6sbad"/><path class="zkc3a6ybf"/><path class="pycxazbfr"/>`,
		"fallback": "energy-icons:tripod-foundation-20",
	});
}

export default Component;
