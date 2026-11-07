import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvlgxcc0y.css';
import '../../css/k/kzq8r7vcj.css';
import '../../css/i/ie_i89bbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dvlgxcc0y"/><path class="kzq8r7vcj"/><path clip-rule="evenodd" class="ie_i89bbl"/>`,
		"fallback": "solar:user-plus-rounded-outline",
	});
}

export default Component;
