import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfo80ubkp.css';
import '../../css/j/jx6xceb7r.css';
import '../../css/b/b_flqm05r.css';
import '../../css/h/ho9tv7fwi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sfo80ubkp"/><path class="jx6xceb7r"/><path class="b_flqm05r"/><path class="ho9tv7fwi"/>`,
		"fallback": "energy-icons:photodiode-20-bold",
	});
}

export default Component;
