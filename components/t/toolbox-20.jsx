import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxd6jfy2h.css';
import '../../css/c/chzkkvbwn.css';
import '../../css/k/k2xeydb2v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zxd6jfy2h"/><path class="chzkkvbwn"/><path class="k2xeydb2v"/>`,
		"fallback": "energy-icons:toolbox-20",
	});
}

export default Component;
