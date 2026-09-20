import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhon04bki.css';
import '../../css/o/ouolnv3pk.css';
import '../../css/s/sx8yv1e2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhon04bki"/><path class="ouolnv3pk"/><path class="sx8yv1e2c"/>`,
		"fallback": "material-icon-theme:openapi",
	});
}

export default Component;
