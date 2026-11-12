import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f29kucyid.css';
import '../../css/o/oea564d7x.css';
import '../../css/z/za9rmmb2u.css';
import '../../css/d/dbvv0pujv.css';
import '../../css/e/eyeu8pbrl.css';
import '../../css/t/t30u2x_4k.css';
import '../../css/d/djnnzmsgz.css';
import '../../css/m/mohpctbgo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f29kucyid"/><path class="oea564d7x"/><path class="za9rmmb2u"/><path class="dbvv0pujv"/><path class="eyeu8pbrl"/><path class="t30u2x_4k"/><path class="djnnzmsgz"/><path class="mohpctbgo"/>`,
		"fallback": "selfhst:manifest",
	});
}

export default Component;
