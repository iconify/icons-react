import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uqpi-g-5k.css';
import '../../css/p/pbrz3mfxd.css';
import '../../css/d/dtr438hsl.css';
import '../../css/m/m1uqg3ban.css';

const viewBox = {"width":256,"height":289};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uqpi-g-5k"/><circle transform="rotate(180 104.91 183.505)" class="pbrz3mfxd"/><path class="dtr438hsl"/><path class="m1uqg3ban"/>`,
		"fallback": "thesvg-color:tauri",
	});
}

export default Component;
