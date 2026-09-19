import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yyvtd4b7f.css';
import '../../css/f/fki8g2cdi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yyvtd4b7f"/><path class="fki8g2cdi"/></g>`,
		"fallback": "fluent-emoji-flat:optical-disk",
	});
}

export default Component;
