import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ou-9bxqmq.css';
import '../../css/a/art0zmfvp.css';
import '../../css/t/t-8qjbbze.css';
import '../../css/p/plgq51beq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ou-9bxqmq"/><path class="art0zmfvp"/><path class="mr-st1 t-8qjbbze"/><path class="plgq51beq"/>`,
		"fallback": "flag:mr-1x1",
	});
}

export default Component;
