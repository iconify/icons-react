import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/pbez3abyf.css';
import '../../css/u/uy17h9b8r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="pbez3abyf"/><path class="uy17h9b8r"/></g>`,
		"fallback": "streamline-flex-color:tidal-wave-flat",
	});
}

export default Component;
