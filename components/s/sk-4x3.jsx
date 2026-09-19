import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhcyn02em.css';
import '../../css/l/l8_qf1bod.css';
import '../../css/f/fbsiz1bro.css';
import '../../css/t/tzbujjjnz.css';
import '../../css/k/kerkuuqkj.css';
import '../../css/m/m5beuq8ah.css';
import '../../css/b/bwrhq3b4b.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vhcyn02em"/><path class="l8_qf1bod"/><path class="fbsiz1bro"/><path class="tzbujjjnz"/><path class="kerkuuqkj"/><path class="m5beuq8ah"/><path class="bwrhq3b4b"/>`,
		"fallback": "flag:sk-4x3",
	});
}

export default Component;
