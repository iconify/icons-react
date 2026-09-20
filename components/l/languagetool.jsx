import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bpwqczfrc.css';
import '../../css/q/qas0_334r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bpwqczfrc"/><path class="qas0_334r"/>`,
		"fallback": "selfhst:languagetool",
	});
}

export default Component;
