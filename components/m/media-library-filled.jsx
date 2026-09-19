import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w6feaxw3l.css';
import '../../css/g/gx0j_wt-s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w6feaxw3l"/><path class="gx0j_wt-s"/>`,
		"fallback": "carbon:media-library-filled",
	});
}

export default Component;
