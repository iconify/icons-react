import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oz0dcbb8n.css';
import '../../css/a/acpm77yta.css';
import '../../css/e/eh9hibb6l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGsROPFdNx" x1="-.1" x2="51244.4" y1="507.8" y2="-49951.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="oz0dcbb8n"/><stop offset="1" class="acpm77yta"/></linearGradient><path fill="url(#SVGsROPFdNx)" class="eh9hibb6l"/>`,
		"fallback": "selfhst:kaunta",
	});
}

export default Component;
