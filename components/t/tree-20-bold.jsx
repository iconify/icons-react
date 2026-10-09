import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utcxkkbxw.css';
import '../../css/g/gtg_bmb_n.css';
import '../../css/t/t87_xhoos.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="utcxkkbxw"/><path class="gtg_bmb_n"/><path class="t87_xhoos"/>`,
		"fallback": "energy-icons:tree-20-bold",
	});
}

export default Component;
