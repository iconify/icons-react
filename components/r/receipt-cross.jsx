import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/y/y9h8w8b0s.css';
import '../../css/v/vts2zgh9v.css';
import '../../css/w/wmwy0wzyp.css';
import '../../css/d/d13yejvim.css';
import '../../css/o/ocjy5-mgq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="y9h8w8b0s"/><path class="vts2zgh9v"/><path class="wmwy0wzyp"/><path class="d13yejvim"/><path class="ocjy5-mgq"/></g>`,
		"fallback": "streamline-plump-color:receipt-cross",
	});
}

export default Component;
