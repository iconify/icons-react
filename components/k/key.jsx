import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/ferzg1j3i.css';
import '../../css/m/mcvn_lbhc.css';
import '../../css/u/u793uy5pd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="ferzg1j3i"/><path class="mcvn_lbhc"/><path class="u793uy5pd"/></g>`,
		"fallback": "struq:key",
	});
}

export default Component;
