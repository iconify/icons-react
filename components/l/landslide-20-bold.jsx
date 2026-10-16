import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z5hn9ec-l.css';
import '../../css/r/r_ps52b0k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z5hn9ec-l"/><path class="r_ps52b0k"/>`,
		"fallback": "energy-icons:landslide-20-bold",
	});
}

export default Component;
