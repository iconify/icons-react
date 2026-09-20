import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/okxtb_bme.css';
import '../../css/e/enbahc62i.css';
import '../../css/f/fipkdxbqo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="okxtb_bme"/><path clip-rule="evenodd" class="enbahc62i"/><path class="fipkdxbqo"/></g>`,
		"fallback": "streamline-flex-color:printer-flat",
	});
}

export default Component;
