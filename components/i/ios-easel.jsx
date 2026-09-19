import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gl0tk0yor.css';
import '../../css/d/dxlqy5r4v.css';
import '../../css/u/um2eyh0wt.css';
import '../../css/q/q69a3ybwa.css';
import '../../css/k/kg7sicqni.css';
import '../../css/p/p7jik87kc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gl0tk0yor"/><path class="dxlqy5r4v"/><path class="um2eyh0wt"/><g><path class="q69a3ybwa"/><path class="kg7sicqni"/></g><path class="p7jik87kc"/>`,
		"fallback": "ion:ios-easel",
	});
}

export default Component;
