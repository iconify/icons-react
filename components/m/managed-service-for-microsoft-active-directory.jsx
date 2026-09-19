import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v681d4kxi.css';
import '../../css/m/m9546-bru.css';
import '../../css/q/qr5uq8k0o.css';
import '../../css/m/m1lw9kb4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v681d4kxi"/><path class="m9546-bru"/><path class="qr5uq8k0o"/><path class="m1lw9kb4z"/>`,
		"fallback": "gcp:managed-service-for-microsoft-active-directory",
	});
}

export default Component;
