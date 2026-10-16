import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gr770pz-q.css';
import '../../css/o/orx0-2epj.css';
import '../../css/s/sbh9h8-ru.css';
import '../../css/s/s4owz8l_h.css';
import '../../css/p/p804tzuwm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gr770pz-q"/><path class="orx0-2epj"/><path class="sbh9h8-ru"/><path class="s4owz8l_h"/><path class="p804tzuwm"/>`,
		"fallback": "energy-icons:level-crossing-20-bold",
	});
}

export default Component;
