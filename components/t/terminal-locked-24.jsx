import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbl7r9mon.css';
import '../../css/z/zvcrm1bfj.css';
import '../../css/g/g5vtw-iho.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbl7r9mon"/><path class="zvcrm1bfj"/><path class="g5vtw-iho"/>`,
		"fallback": "octicon:terminal-locked-24",
	});
}

export default Component;
