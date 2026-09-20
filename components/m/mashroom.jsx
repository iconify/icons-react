import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hyiq52k8l.css';
import '../../css/m/m1abqtscw.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hyiq52k8l"/><path class="m1abqtscw"/>`,
		"fallback": "lineicons:mashroom",
	});
}

export default Component;
