import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmsivqbdn.css';
import '../../css/b/bp_r-ss8m.css';
import '../../css/j/jb6w9qawu.css';
import '../../css/a/a--0kkbee.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pmsivqbdn"/><path class="bp_r-ss8m"/><circle class="jb6w9qawu"/><path class="a--0kkbee"/>`,
		"fallback": "openmoji:jeans",
	});
}

export default Component;
