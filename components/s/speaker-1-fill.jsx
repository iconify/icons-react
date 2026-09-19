import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7ksm5bpd.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c7ksm5bpd"/>`,
		"fallback": "f7:speaker-1-fill",
	});
}

export default Component;
