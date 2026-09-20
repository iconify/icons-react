import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/g3jochy7y.css';
import '../../css/g/g4n_doocx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="g3jochy7y"/><path class="g4n_doocx"/></g>`,
		"fallback": "reicon:mirror-duotone",
	});
}

export default Component;
