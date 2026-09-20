import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zvv6zlbbs.css';
import '../../css/z/zjbbhu3xb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="zvv6zlbbs"/><path class="zjbbhu3xb"/></g>`,
		"fallback": "reicon:tennis2",
	});
}

export default Component;
