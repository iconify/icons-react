import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbn8jqf1h.css';
import '../../css/b/b0cn2mb5s.css';
import '../../css/c/ct59a3bzk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbn8jqf1h"/><path class="b0cn2mb5s"/><path class="ct59a3bzk"/>`,
		"fallback": "energy-icons:police-station-20-bold",
	});
}

export default Component;
