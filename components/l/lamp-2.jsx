import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q6e3cs9co.css';
import '../../css/g/gwal899za.css';
import '../../css/s/si9kwcchz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="q6e3cs9co"/><path class="gwal899za"/><path class="si9kwcchz"/></g>`,
		"fallback": "tabler:lamp-2",
	});
}

export default Component;
