import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/czdr5rb7i.css';
import '../../css/t/tljtfac6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="czdr5rb7i"/><path class="tljtfac6y"/></g>`,
		"fallback": "tabler:wash-temperature-6",
	});
}

export default Component;
