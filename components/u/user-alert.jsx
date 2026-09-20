import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/r/rh_082klz.css';
import '../../css/y/y-gps9pxm.css';
import '../../css/t/tbfusvbiq.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="rh_082klz"/><path class="y-gps9pxm"/><path class="tbfusvbiq"/></g>`,
		"fallback": "marketeq:user-alert",
	});
}

export default Component;
