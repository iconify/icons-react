import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvcq89ble.css';
import '../../css/g/gwcu8infc.css';
import '../../css/w/wnfssjrql.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cvcq89ble"><path class="gwcu8infc"/><path class="wnfssjrql"/></g>`,
		"fallback": "catppuccin:npm-ignore",
	});
}

export default Component;
