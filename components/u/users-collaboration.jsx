import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zkac9ebhb.css';
import '../../css/i/iv1wfn4xs.css';
import '../../css/a/at9-cgbfo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zkac9ebhb"/><circle class="iv1wfn4xs"/><circle class="at9-cgbfo"/></g>`,
		"fallback": "lucide:users-collaboration",
	});
}

export default Component;
