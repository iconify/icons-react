import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rnur-j-os.css';
import '../../css/l/lxdfemg9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="rnur-j-os"/><path class="lxdfemg9x"/></g>`,
		"fallback": "akar-icons:leaf",
	});
}

export default Component;
