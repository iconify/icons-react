import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/ktvkgs0ji.css';
import '../../css/k/kiehcdbvr.css';
import '../../css/l/ld5vkvb-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ktvkgs0ji"/><path class="kiehcdbvr"/><path class="ld5vkvb-l"/></g>`,
		"fallback": "andrsrxn:seek-forward-five",
	});
}

export default Component;
