import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s09_o6rsp.css';
import '../../css/a/a0j8fkmhb.css';
import '../../css/l/ln35q8plx.css';
import '../../css/g/g7dhhz-fw.css';
import '../../css/n/nvr01tbel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s09_o6rsp"/><path class="a0j8fkmhb"/><path class="ln35q8plx"/><path class="g7dhhz-fw"/><path class="nvr01tbel"/>`,
		"fallback": "solar:palette-2-bold-duotone",
	});
}

export default Component;
