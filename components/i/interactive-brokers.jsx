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
		"content": `<linearGradient id="SVGw4AkpdMm" x1="2136.942" x2="2363.435" y1="125.81" y2="125.81" gradientTransform="rotate(180 1244.122 256.5)" gradientUnits="userSpaceOnUse"><stop offset="0" class="xo23aj6tx"/><stop offset="1" class="lfvsq0b3f"/></linearGradient><path fill="url(#SVGw4AkpdMm)" class="ccqymhpos"/><path class="fdv3dhems"/>`,
		"fallback": "selfhst:interactive-brokers",
	});
}

export default Component;
