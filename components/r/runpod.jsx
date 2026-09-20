import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uij4f5b-x.css';
import '../../css/g/gx4suybiw.css';
import '../../css/i/i2ivzmcfr.css';

const viewBox = {"width":141,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="uij4f5b-x"><path clip-rule="evenodd" class="gx4suybiw"/><path class="i2ivzmcfr"/></g>`,
		"fallback": "thesvg-color:runpod",
	});
}

export default Component;
