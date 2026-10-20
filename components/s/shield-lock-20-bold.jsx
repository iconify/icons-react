import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ld3dvsbdz.css';
import '../../css/p/pudna3b6q.css';
import '../../css/a/a-axxkxuy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ld3dvsbdz"/><path class="pudna3b6q"/><path class="a-axxkxuy"/>`,
		"fallback": "energy-icons:shield-lock-20-bold",
	});
}

export default Component;
