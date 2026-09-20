import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sarm1qkki.css';
import '../../css/g/gz4_sebnl.css';
import '../../css/o/ow8eqgmdm.css';
import '../../css/u/uk0szwb3y.css';
import '../../css/c/cs1lv4e5x.css';
import '../../css/o/oxvo-xb6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sarm1qkki"/><path clip-rule="evenodd" class="gz4_sebnl"/><path class="ow8eqgmdm"/><path class="uk0szwb3y"/><path clip-rule="evenodd" class="cs1lv4e5x"/><path clip-rule="evenodd" class="oxvo-xb6o"/>`,
		"fallback": "streamline-freehand:network-monitor-hierarchy",
	});
}

export default Component;
