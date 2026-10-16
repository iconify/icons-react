import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/layun2cdm.css';
import '../../css/c/cwapoj_fx.css';
import '../../css/m/m2q42tstp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="layun2cdm"/><path class="cwapoj_fx"/><path class="m2q42tstp"/>`,
		"fallback": "energy-icons:sun-angle-20-bold",
	});
}

export default Component;
