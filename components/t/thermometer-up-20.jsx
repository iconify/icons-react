import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6zve7bwi.css';
import '../../css/l/lrf20th3l.css';
import '../../css/q/qekov_6lg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6zve7bwi"/><path class="lrf20th3l"/><path class="qekov_6lg"/>`,
		"fallback": "energy-icons:thermometer-up-20",
	});
}

export default Component;
