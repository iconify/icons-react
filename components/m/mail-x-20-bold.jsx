import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lvpdrtm6x.css';
import '../../css/k/kgx7jsbsk.css';
import '../../css/x/xak2o0bmu.css';
import '../../css/k/k6sa60boh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lvpdrtm6x"/><path class="kgx7jsbsk"/><path class="xak2o0bmu"/><path class="k6sa60boh"/>`,
		"fallback": "energy-icons:mail-x-20-bold",
	});
}

export default Component;
