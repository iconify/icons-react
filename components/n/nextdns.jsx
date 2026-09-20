import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pnfyskynu.css';
import '../../css/u/uhzk_qbaq.css';
import '../../css/x/xl_cnabsn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGKUj4hbnV" x1="-48.712" x2="-47.692" y1="653.259" y2="653.259" gradientTransform="matrix(187.3057 450.9798 384.0336 -219.9575 -241602.61 165595.125)" gradientUnits="userSpaceOnUse"><stop offset="0" class="pnfyskynu"/><stop offset="1" class="uhzk_qbaq"/></linearGradient><path fill="url(#SVGKUj4hbnV)" class="xl_cnabsn"/>`,
		"fallback": "selfhst:nextdns",
	});
}

export default Component;
