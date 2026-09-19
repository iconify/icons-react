import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ce4x6tx7w.css';
import '../../css/w/w0za-obmf.css';
import '../../css/t/tgr0ac0hb.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ce4x6tx7w"/><path class="w0za-obmf"/><path class="tgr0ac0hb"/>`,
		"fallback": "devicon:swift-wordmark",
	});
}

export default Component;
