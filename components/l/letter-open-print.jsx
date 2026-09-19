import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/p9kz86d4t.css';
import '../../css/q/qlstdbbsh.css';
import '../../css/l/l1456wbin.css';
import '../../css/i/igeg8hbsd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="p9kz86d4t"/><path class="qlstdbbsh"/><path class="l1456wbin"/><path class="igeg8hbsd"/></g>`,
		"fallback": "pepicons:letter-open-print",
	});
}

export default Component;
