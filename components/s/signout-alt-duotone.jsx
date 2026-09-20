import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sim9l-hfg.css';
import '../../css/e/emjhpkb7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sim9l-hfg"/><path class="emjhpkb7p"/>`,
		"fallback": "stash:signout-alt-duotone",
	});
}

export default Component;
