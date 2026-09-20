import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/pyk5dibjj.css';
import '../../css/c/cwbz9hv9b.css';
import '../../css/s/s9-lr8ber.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="pyk5dibjj"/><path class="cwbz9hv9b"/><path class="s9-lr8ber"/></g>`,
		"fallback": "streamline-sharp-color:shipment-check-flat",
	});
}

export default Component;
