import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/ld24yvbps.css';
import '../../css/t/t59yavedn.css';
import '../../css/b/bfa9u6b3s.css';
import '../../css/v/vyf_cubjn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ld24yvbps"/><path class="t59yavedn"/><path class="bfa9u6b3s"/><path class="vyf_cubjn"/></g>`,
		"fallback": "tabler:target-arrow",
	});
}

export default Component;
