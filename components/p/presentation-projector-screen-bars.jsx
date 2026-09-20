import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zlqn1k-fo.css';
import '../../css/m/m47d-gbzp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="zlqn1k-fo"/><path class="m47d-gbzp"/></g>`,
		"fallback": "streamline-freehand:presentation-projector-screen-bars",
	});
}

export default Component;
