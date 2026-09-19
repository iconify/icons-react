import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwkdhox2i.css';
import '../../css/z/zdytijs1i.css';
import '../../css/r/rwfxvpb_h.css';
import '../../css/g/g42qkjuof.css';
import '../../css/b/bgjt_ibpq.css';
import '../../css/f/fzevag2wj.css';
import '../../css/w/wfafjenox.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGN1cfrT9y" x1="6" x2="235" y1="33" y2="344" gradientTransform="translate(0 .937)scale(.3122)" gradientUnits="userSpaceOnUse"><stop offset="0" class="bwkdhox2i"/><stop offset="1" class="zdytijs1i"/></linearGradient><linearGradient id="SVGk86M3d2e" x1="194.651" x2="236.076" y1="8.818" y2="292.989" gradientTransform="translate(0 .937)scale(.3122)" gradientUnits="userSpaceOnUse"><stop offset="0" class="rwfxvpb_h"/><stop offset=".083" class="g42qkjuof"/><stop offset="1" class="bgjt_ibpq"/></linearGradient></defs><path fill="url(#SVGN1cfrT9y)" class="fzevag2wj"/><path fill="url(#SVGk86M3d2e)" class="wfafjenox"/>`,
		"fallback": "devicon:vitejs",
	});
}

export default Component;
