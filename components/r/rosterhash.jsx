import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fprq_0fsn.css';
import '../../css/p/p__zjibpv.css';
import '../../css/z/zsuyb4b9u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fprq_0fsn"/><path class="p__zjibpv"/><path class="zsuyb4b9u"/>`,
		"fallback": "selfhst:rosterhash",
	});
}

export default Component;
