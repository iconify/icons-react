import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/j/jqtzrzb7p.css';
import '../../css/j/jpo7_pb2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="jqtzrzb7p"/><path class="jpo7_pb2a"/></g>`,
		"fallback": "keyline-icons:underline-sharp-duotone",
	});
}

export default Component;
