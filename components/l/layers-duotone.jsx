import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nefq8ib6a.css';
import '../../css/n/nbx9fsn3d.css';
import '../../css/v/vn79wibol.css';
import '../../css/x/xm4cc_m2k.css';
import '../../css/x/x5scij4wi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nefq8ib6a"/><path clip-rule="evenodd" class="nbx9fsn3d"/><path class="vn79wibol"/><path clip-rule="evenodd" class="xm4cc_m2k"/><path class="x5scij4wi"/>`,
		"fallback": "lets-icons:layers-duotone",
	});
}

export default Component;
