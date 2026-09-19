import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jykbmnblb.css';
import '../../css/k/kpcu7cc2h.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jykbmnblb"/><path clip-rule="evenodd" class="kpcu7cc2h"/>`,
		"fallback": "devicon-plain:json",
	});
}

export default Component;
