import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sur2lbckt.css';
import '../../css/y/y8vz5lo5y.css';
import '../../css/o/o_9iao69q.css';
import '../../css/o/o_0zo1b5y.css';
import '../../css/b/b-hmcuh1z.css';
import '../../css/c/cb26fesmn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sur2lbckt"/><path class="y8vz5lo5y"/><path class="o_9iao69q"/><path class="o_0zo1b5y"/><path class="b-hmcuh1z"/><path class="cb26fesmn"/>`,
		"fallback": "selfhst:solidping",
	});
}

export default Component;
