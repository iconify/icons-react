import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fwezt-ini.css';
import '../../css/k/k0vfem02x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fwezt-ini"/><path class="k0vfem02x"/>`,
		"fallback": "streamline-plump:reply-to-message-typing-solid",
	});
}

export default Component;
