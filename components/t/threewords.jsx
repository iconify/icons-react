import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_ckt2lhw.css';

const viewBox = {"width":312,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_ckt2lhw"/>`,
		"fallback": "ps:threewords",
	});
}

export default Component;
