import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tke4h5b0x.css';
import '../../css/s/sumuwdriv.css';
import '../../css/u/ugw1omula.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="tke4h5b0x"/><path class="sumuwdriv"/><circle class="ugw1omula"/></g>`,
		"fallback": "lucide:route-off",
	});
}

export default Component;
