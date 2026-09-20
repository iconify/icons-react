import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bk-qwvomb.css';
import '../../css/j/jfe6ttbpf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bk-qwvomb"/><path class="jfe6ttbpf"/>`,
		"fallback": "selfhst:penn-state-nittany-lions",
	});
}

export default Component;
