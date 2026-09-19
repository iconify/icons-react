import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e73n2wbci.css';
import '../../css/t/ts2ygdnsu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e73n2wbci"/><path class="ts2ygdnsu"/>`,
		"fallback": "ion:return-up-forward-sharp",
	});
}

export default Component;
