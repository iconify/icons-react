import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ixa1rnols.css';
import '../../css/s/sk__9tbvz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ixa1rnols"/><path class="sk__9tbvz"/></g>`,
		"fallback": "vadivam:save-all",
	});
}

export default Component;
