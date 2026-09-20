import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fzma84bpw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fzma84bpw"/>`,
		"fallback": "selfhst:klipper-light",
	});
}

export default Component;
