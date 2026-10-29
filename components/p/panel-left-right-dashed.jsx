import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-qoz4brv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-qoz4brv"/>`,
		"fallback": "vadivam:panel-left-right-dashed",
	});
}

export default Component;
