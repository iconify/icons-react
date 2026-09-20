import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oz0dcbb8n.css';
import '../../css/a/acpm77yta.css';
import '../../css/n/nln0yoikt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVG1UpyudTL" x1="-.095" x2="51244.359" y1="507.833" y2="-49951.543" gradientUnits="userSpaceOnUse"><stop offset="0" class="oz0dcbb8n"/><stop offset="1" class="acpm77yta"/></linearGradient><path fill="url(#SVG1UpyudTL)" class="nln0yoikt"/>`,
		"fallback": "selfhst:kaunta",
	});
}

export default Component;
