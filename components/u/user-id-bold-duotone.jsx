import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nphcgbcmt.css';
import '../../css/k/k9no-9t3l.css';
import '../../css/f/fmbn5ubnp.css';
import '../../css/i/io-bp4hes.css';
import '../../css/r/rp2xrbvey.css';
import '../../css/x/xlf8yxbsq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nphcgbcmt"/><path class="k9no-9t3l"/><path class="fmbn5ubnp"/><path class="io-bp4hes"/><path class="rp2xrbvey"/><path class="xlf8yxbsq"/>`,
		"fallback": "solar:user-id-bold-duotone",
	});
}

export default Component;
