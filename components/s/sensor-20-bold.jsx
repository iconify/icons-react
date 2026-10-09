import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fd9-7xbqm.css';
import '../../css/i/i_d0_pb7z.css';
import '../../css/q/q73zetbak.css';
import '../../css/x/xkk6mccbi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fd9-7xbqm"/><path class="i_d0_pb7z"/><path class="q73zetbak"/><path class="xkk6mccbi"/>`,
		"fallback": "energy-icons:sensor-20-bold",
	});
}

export default Component;
