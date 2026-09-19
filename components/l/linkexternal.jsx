import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i4nnu3b-h.css';
import '../../css/s/s_rjlabju.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i4nnu3b-h"/><path class="s_rjlabju"/>`,
		"fallback": "formkit:linkexternal",
	});
}

export default Component;
