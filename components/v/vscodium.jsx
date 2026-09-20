import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwuxu7bdj.css';
import '../../css/z/zkrs_kb_e.css';
import '../../css/w/wp-cwqm9z.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGUFVlnbzA" x1="199.997" x2="296.665" y1="214.302" y2="307.573" gradientTransform="translate(-200 -213)" gradientUnits="userSpaceOnUse"><stop offset="0" class="bwuxu7bdj"/><stop offset="1" class="zkrs_kb_e"/></linearGradient></defs><path fill="url(#SVGUFVlnbzA)" class="wp-cwqm9z"/>`,
		"fallback": "thesvg-color:vscodium",
	});
}

export default Component;
