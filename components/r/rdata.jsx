import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d8ga_xhyw.css';
import '../../css/c/cmxs_qw5o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path transform="matrix(1.26652 0 0 1.26466 -1.313 -1.572)" class="d8ga_xhyw"/><path class="cmxs_qw5o"/>`,
		"fallback": "catppuccin:rdata",
	});
}

export default Component;
