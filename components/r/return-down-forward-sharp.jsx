import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jbhew13zs.css';
import '../../css/c/cbep2fbfg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jbhew13zs"/><path class="cbep2fbfg"/>`,
		"fallback": "ion:return-down-forward-sharp",
	});
}

export default Component;
