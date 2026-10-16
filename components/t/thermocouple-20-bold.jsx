import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rc82xxbku.css';
import '../../css/i/im-vrsb-c.css';
import '../../css/a/apexb8rod.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rc82xxbku"/><path class="im-vrsb-c"/><path class="apexb8rod"/>`,
		"fallback": "energy-icons:thermocouple-20-bold",
	});
}

export default Component;
