import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-jv-mbrm.css';
import '../../css/t/t5-bpgztj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-jv-mbrm"/><path class="t5-bpgztj"/>`,
		"fallback": "ion:people-circle",
	});
}

export default Component;
