import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o30i8gi7t.css';
import '../../css/o/orm3uibci.css';
import '../../css/j/j3akw_70p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="o30i8gi7t"/><path class="orm3uibci"/><path class="j3akw_70p"/></g>`,
		"fallback": "keyline-icons:train-duotone",
	});
}

export default Component;
