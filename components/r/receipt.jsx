import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v6k7bebpa.css';
import '../../css/b/bxti7ebgp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="v6k7bebpa"/><path class="bxti7ebgp"/></g>`,
		"fallback": "vadivam:receipt",
	});
}

export default Component;
