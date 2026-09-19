import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3dpzbtra.css';
import '../../css/o/obna4oqji.css';
import '../../css/v/v0nd3ac9a.css';
import '../../css/e/ercysii-o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y3dpzbtra"><path class="obna4oqji"/><path class="v0nd3ac9a"/><path class="ercysii-o"/></g>`,
		"fallback": "icon-park-outline:target-two",
	});
}

export default Component;
