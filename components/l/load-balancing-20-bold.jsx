import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gb0q-t_1r.css';
import '../../css/g/g8k86tb-n.css';
import '../../css/k/k-qil1rqy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gb0q-t_1r"/><path class="g8k86tb-n"/><path class="k-qil1rqy"/>`,
		"fallback": "energy-icons:load-balancing-20-bold",
	});
}

export default Component;
