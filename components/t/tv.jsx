import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqd8fcboz.css';
import '../../css/l/lvd74yj2i.css';
import '../../css/e/enz041qvv.css';
import '../../css/e/eh5w_acha.css';
import '../../css/s/si9_29bym.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hqd8fcboz"><path class="lvd74yj2i"/><path class="enz041qvv"/><path class="eh5w_acha"/><path class="si9_29bym"/></g>`,
		"fallback": "gala:tv",
	});
}

export default Component;
