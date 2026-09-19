import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/d/ddf6u7zwo.css';
import '../../css/z/z_ff3xb_k.css';
import '../../css/y/y7qltbgbx.css';
import '../../css/g/goapajb2k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="ddf6u7zwo"/><path class="z_ff3xb_k"/><path class="y7qltbgbx"/><path class="goapajb2k"/></g>`,
		"fallback": "icon-park:treasure-chest",
	});
}

export default Component;
