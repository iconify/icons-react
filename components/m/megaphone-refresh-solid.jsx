import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qiylwmb8r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qiylwmb8r"/>`,
		"fallback": "streamline-plump:megaphone-refresh-solid",
	});
}

export default Component;
