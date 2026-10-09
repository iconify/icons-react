import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e4w28heyk.css';
import '../../css/n/nmtbxqbkt.css';
import '../../css/r/rz5zv0blr.css';
import '../../css/h/hbfxshwmv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e4w28heyk"/><path class="nmtbxqbkt"/><path class="rz5zv0blr"/><path class="hbfxshwmv"/>`,
		"fallback": "energy-icons:smart-meter-20-bold",
	});
}

export default Component;
