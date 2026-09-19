import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc--wpv5i.css';
import '../../css/q/q5kv900nb.css';
import '../../css/v/vntad-bds.css';
import '../../css/s/sc8gq5b4w.css';
import '../../css/u/uuauku1pl.css';
import '../../css/q/qkce8ac2n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVGSJNuYcoU" cx="0" cy="0" r="1" gradientTransform="matrix(10.5875 0 0 10.784 4.993 -.868)" gradientUnits="userSpaceOnUse"><stop offset="0" class="vc--wpv5i"/><stop offset="1"/></radialGradient></defs><path class="q5kv900nb"/><path fill="url(#SVGSJNuYcoU)" class="vntad-bds"/><path class="sc8gq5b4w"/><path class="uuauku1pl"/><path class="qkce8ac2n"/>`,
		"fallback": "catppuccin:poetry-lock",
	});
}

export default Component;
