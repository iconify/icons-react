import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mz-zlvl4p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mz-zlvl4p"/>`,
		"fallback": "streamline-plump:ipad-tablet-screen-solid",
	});
}

export default Component;
