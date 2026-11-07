import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-3qw545f.css';
import '../../css/b/bf9x-hh2k.css';
import '../../css/c/crrii6bny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e-3qw545f"/><path class="bf9x-hh2k"/><path class="crrii6bny"/>`,
		"fallback": "solar:watch-round-bold",
	});
}

export default Component;
