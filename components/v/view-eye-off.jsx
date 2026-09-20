import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv2l60z2l.css';
import '../../css/s/sbpa77b-h.css';
import '../../css/o/onghmnteu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nv2l60z2l"/><path class="sbpa77b-h"/><path class="onghmnteu"/>`,
		"fallback": "streamline-freehand:view-eye-off",
	});
}

export default Component;
