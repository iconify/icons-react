import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mltz1-3_c.css';
import '../../css/h/hzwaagb3g.css';
import '../../css/t/tgddkdmlp.css';
import '../../css/k/ky6vsbbsb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mltz1-3_c"/><path class="hzwaagb3g"/><path class="tgddkdmlp"/><path class="ky6vsbbsb"/>`,
		"fallback": "fxemoji:snowmountains",
	});
}

export default Component;
