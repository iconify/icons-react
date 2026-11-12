import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xo23aj6tx.css';
import '../../css/l/lfvsq0b3f.css';
import '../../css/c/ccqymhpos.css';
import '../../css/f/fdv3dhems.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGwklnjR8C" x1="351.3" x2="124.8" y1="387.2" y2="387.2" gradientUnits="userSpaceOnUse"><stop offset="0" class="xo23aj6tx"/><stop offset="1" class="lfvsq0b3f"/></linearGradient><path fill="url(#SVGwklnjR8C)" class="ccqymhpos"/><path class="fdv3dhems"/>`,
		"fallback": "selfhst:interactive-brokers",
	});
}

export default Component;
