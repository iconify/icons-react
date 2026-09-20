import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x2vx0ib8h.css';
import '../../css/h/hl7909bpw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x2vx0ib8h"/><path class="hl7909bpw"/>`,
		"fallback": "streamline-pixel:transportation-train",
	});
}

export default Component;
