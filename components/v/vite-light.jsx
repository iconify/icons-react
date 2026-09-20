import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djqetsxsa.css';
import '../../css/o/ow-v5bb5e.css';
import '../../css/d/d4x9qnrid.css';
import '../../css/b/bwkdhox2i.css';
import '../../css/z/zdytijs1i.css';
import '../../css/r/rwfxvpb_h.css';
import '../../css/g/g42qkjuof.css';
import '../../css/b/bgjt_ibpq.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="djqetsxsa"/><path fill="url(#SVGO6JBKe3v)" class="ow-v5bb5e"/><path fill="url(#SVGHms0bd8n)" class="d4x9qnrid"/><defs><linearGradient id="SVGO6JBKe3v" x1="26.346" x2="143.127" y1="44.075" y2="202.673" gradientUnits="userSpaceOnUse"><stop class="bwkdhox2i"/><stop offset="1" class="zdytijs1i"/></linearGradient><linearGradient id="SVGHms0bd8n" x1="122.551" x2="143.676" y1="31.743" y2="176.66" gradientUnits="userSpaceOnUse"><stop class="rwfxvpb_h"/><stop offset=".083" class="g42qkjuof"/><stop offset="1" class="bgjt_ibpq"/></linearGradient></defs></g>`,
		"fallback": "skill-icons:vite-light",
	});
}

export default Component;
