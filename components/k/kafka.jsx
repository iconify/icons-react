import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wrnvocb2t.css';
import '../../css/s/scrv-lbji.css';
import '../../css/q/qw4p5cc3k.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="wrnvocb2t"/><g clip-path="url(#SVG9Z34dcRS)"><path class="scrv-lbji"/></g><defs><clipPath id="SVG9Z34dcRS"><path class="qw4p5cc3k"/></clipPath></defs></g>`,
		"fallback": "skill-icons:kafka",
	});
}

export default Component;
