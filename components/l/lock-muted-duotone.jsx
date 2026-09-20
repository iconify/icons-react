import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in1dviszv.css';
import '../../css/h/hiqsv9b4b.css';
import '../../css/o/ob8mo8phv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in1dviszv"><path class="hiqsv9b4b"/><path class="ob8mo8phv"/></g>`,
		"fallback": "si:lock-muted-duotone",
	});
}

export default Component;
