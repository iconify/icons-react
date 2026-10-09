import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jgcb4c_nz.css';
import '../../css/c/ctkosrb3v.css';
import '../../css/l/lxsqj045t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jgcb4c_nz"/><path class="ctkosrb3v"/><path class="lxsqj045t"/>`,
		"fallback": "energy-icons:smart-lock-20-bold",
	});
}

export default Component;
