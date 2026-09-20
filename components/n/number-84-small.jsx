import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdpmnubth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdpmnubth"/>`,
		"fallback": "tabler:number-84-small",
	});
}

export default Component;
