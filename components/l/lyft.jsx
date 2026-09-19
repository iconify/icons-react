import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s7xcoth-m.css';
import '../../css/x/x-5p19nze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s7xcoth-m"/><path class="x-5p19nze"/>`,
		"fallback": "bxl:lyft",
	});
}

export default Component;
