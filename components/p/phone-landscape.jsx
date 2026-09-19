import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x50z2w0vt.css';
import '../../css/u/ujlm800om.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVG5mxdJbfR" class="x50z2w0vt"/></defs><use href="#SVG5mxdJbfR"/><path class="ujlm800om"/><use href="#SVG5mxdJbfR"/>`,
		"fallback": "famicons:phone-landscape",
	});
}

export default Component;
