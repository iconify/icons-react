import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o1ns9rbyk.css';
import '../../css/a/as60m0h-n.css';
import '../../css/o/o_aledblo.css';
import '../../css/n/nuec0m2ph.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o1ns9rbyk"/><path class="as60m0h-n"/><path class="o_aledblo"/><path class="nuec0m2ph"/>`,
		"fallback": "gcp:quantum-engine",
	});
}

export default Component;
