import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sfeu6cbdw.css';
import '../../css/l/lxnz-6x0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="sfeu6cbdw"/><path class="lxnz-6x0c"/></g>`,
		"fallback": "tabler:queue-pop-out",
	});
}

export default Component;
