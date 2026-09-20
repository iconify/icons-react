import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/pehz2pbll.css';
import '../../css/z/z2ef2wbio.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="pehz2pbll"/><path class="z2ef2wbio"/></g>`,
		"fallback": "streamline-plump-color:iris-scan-flat",
	});
}

export default Component;
