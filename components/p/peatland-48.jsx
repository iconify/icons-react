import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/za30h5bbb.css';
import '../../css/n/no53kdbqh.css';
import '../../css/l/lr5jr9ons.css';
import '../../css/x/xopzt8bhb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="za30h5bbb"/><path class="no53kdbqh"/><path class="lr5jr9ons"/><path class="xopzt8bhb"/>`,
		"fallback": "energy-icons:peatland-48",
	});
}

export default Component;
