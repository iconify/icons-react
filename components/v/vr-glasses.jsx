import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mt-yivboh.css';
import '../../css/j/jbrgj218i.css';
import '../../css/j/jxaa--bmi.css';
import '../../css/o/o3p20zrou.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="mt-yivboh"><path class="jbrgj218i"/><path class="jxaa--bmi"/><path class="o3p20zrou"/></g>`,
		"fallback": "icon-park:vr-glasses",
	});
}

export default Component;
