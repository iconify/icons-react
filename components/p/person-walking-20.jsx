import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tblmeeb4n.css';
import '../../css/o/o8vni54ea.css';
import '../../css/a/aiyg2ojqh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tblmeeb4n"/><path class="o8vni54ea"/><path class="aiyg2ojqh"/>`,
		"fallback": "energy-icons:person-walking-20",
	});
}

export default Component;
