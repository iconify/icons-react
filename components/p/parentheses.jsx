import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfq8i7oxl.css';
import '../../css/j/jlm_d_64c.css';
import '../../css/k/kkgs0eber.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfq8i7oxl wm-shadow"/><path class="jlm_d_64c wm-k"/><path class="kkgs0eber wm-k"/>`,
		"fallback": "withicons-pastel:parentheses",
	});
}

export default Component;
