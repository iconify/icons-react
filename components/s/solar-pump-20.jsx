import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eoon22kar.css';
import '../../css/m/m-kckroos.css';
import '../../css/q/q1lth85bf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eoon22kar"/><path class="m-kckroos"/><path class="q1lth85bf"/>`,
		"fallback": "energy-icons:solar-pump-20",
	});
}

export default Component;
