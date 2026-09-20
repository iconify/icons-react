import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k3exyubib.css';
import '../../css/l/lahcimbvt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="k3exyubib"/><path class="lahcimbvt"/></g>`,
		"fallback": "streamline-color:medical-cross-sign-healthcare",
	});
}

export default Component;
