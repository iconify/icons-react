import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4n515mhi.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/r/roldwybhr.css';
import '../../css/k/kdz4acc8r.css';
import '../../css/x/xapf8wbdv.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGi4RFXbnq" class="w4n515mhi"/></defs><g class="n1mjunbsu"><path class="roldwybhr"/><use href="#SVGi4RFXbnq"/></g><g class="kdz4acc8r"><use href="#SVGi4RFXbnq"/><path class="xapf8wbdv"/></g>`,
		"fallback": "openmoji:overlapping-white-squares",
	});
}

export default Component;
