import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvabx4bul.css';
import '../../css/o/o217wsq9k.css';
import '../../css/g/gra5yw4ra.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="hvabx4bul"/><path class="o217wsq9k"/><path class="gra5yw4ra"/>`,
		"fallback": "selfhst:sortarr-dark",
	});
}

export default Component;
