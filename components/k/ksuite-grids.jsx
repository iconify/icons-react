import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/csjrsmrug.css';
import '../../css/r/r97qhgpob.css';
import '../../css/e/edf9-acys.css';
import '../../css/q/qz8noi23z.css';
import '../../css/j/jrdvhubxc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="csjrsmrug"/><path class="r97qhgpob"/><path class="edf9-acys"/><path class="qz8noi23z"/><path class="jrdvhubxc"/>`,
		"fallback": "selfhst:ksuite-grids",
	});
}

export default Component;
