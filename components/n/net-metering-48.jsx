import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xg3uv7bpl.css';
import '../../css/a/a921hcklm.css';
import '../../css/b/bht55acof.css';
import '../../css/u/um7961b5j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xg3uv7bpl"/><path class="a921hcklm"/><path class="bht55acof"/><path class="um7961b5j"/>`,
		"fallback": "energy-icons:net-metering-48",
	});
}

export default Component;
