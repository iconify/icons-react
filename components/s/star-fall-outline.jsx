import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fkjvti55o.css';
import '../../css/s/s12h24bkl.css';
import '../../css/s/sn-epyzws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="fkjvti55o"/><path class="s12h24bkl"/><path class="sn-epyzws"/></g>`,
		"fallback": "solar:star-fall-outline",
	});
}

export default Component;
