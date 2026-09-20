import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4n515mhi.css';
import '../../css/q/ql3-fhb-b.css';
import '../../css/e/e44i3ccsj.css';
import '../../css/k/kdz4acc8r.css';
import '../../css/i/imrl5j06w.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGi4RFXbnq" class="w4n515mhi"/></defs><use href="#SVGi4RFXbnq"/><path class="ql3-fhb-b"/><path class="e44i3ccsj"/><g class="kdz4acc8r"><path class="imrl5j06w"/><use href="#SVGi4RFXbnq"/></g>`,
		"fallback": "openmoji:overlapping-white-and-black-squares",
	});
}

export default Component;
