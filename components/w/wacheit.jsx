import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6v55xb4m.css';
import '../../css/h/h3e8qmb6x.css';
import '../../css/m/mpmb-4bnd.css';

const viewBox = {"width":21,"height":21,"left":1.5,"top":1.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6v55xb4m"/><circle class="h3e8qmb6x"/><path class="mpmb-4bnd"/>`,
		"fallback": "thesvg-color:wacheit",
	});
}

export default Component;
