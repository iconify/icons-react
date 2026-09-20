import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfdy5f7yi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lfdy5f7yi"/>`,
		"fallback": "streamline-plump:reset-clock-remix",
	});
}

export default Component;
