import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/neoc4fbwo.css';
import '../../css/u/ui33wlb3m.css';
import '../../css/m/midf3bbku.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="neoc4fbwo"/><path class="ui33wlb3m"/><path class="midf3bbku"/>`,
		"fallback": "ion:pricetags-outline",
	});
}

export default Component;
