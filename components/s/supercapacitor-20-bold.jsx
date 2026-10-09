import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzuyn0bdu.css';
import '../../css/e/exf1ewb5k.css';
import '../../css/x/xwlosd37j.css';
import '../../css/g/ghpbfocyg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gzuyn0bdu"/><path class="exf1ewb5k"/><path class="xwlosd37j"/><path class="ghpbfocyg"/>`,
		"fallback": "energy-icons:supercapacitor-20-bold",
	});
}

export default Component;
