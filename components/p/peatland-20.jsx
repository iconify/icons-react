import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wlihmg_5w.css';
import '../../css/d/d15p_kz0v.css';
import '../../css/q/qsfdg6bcv.css';
import '../../css/z/z_5a29b5k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wlihmg_5w"/><path class="d15p_kz0v"/><path class="qsfdg6bcv"/><path class="z_5a29b5k"/>`,
		"fallback": "energy-icons:peatland-20",
	});
}

export default Component;
