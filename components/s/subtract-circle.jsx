import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/it2102bas.css';
import '../../css/r/rt5hcccey.css';
import '../../css/e/egg53_k3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="it2102bas"/><path class="rt5hcccey"/><path class="egg53_k3a"/></g>`,
		"fallback": "streamline-ultimate-color:subtract-circle",
	});
}

export default Component;
