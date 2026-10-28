import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ei1xe8bei.css';
import '../../css/i/i2eqxibtc.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ei1xe8bei"/><path class="i2eqxibtc"/>`,
		"fallback": "devicon:neon-wordmark",
	});
}

export default Component;
