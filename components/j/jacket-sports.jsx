import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pkwnxxbuy.css';
import '../../css/a/avkwxrbxi.css';
import '../../css/m/ml553kega.css';
import '../../css/c/c7xg1sbmj.css';
import '../../css/i/irck0rbnf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pkwnxxbuy"/><path class="avkwxrbxi"/><path class="ml553kega"/><path class="c7xg1sbmj"/><path class="irck0rbnf"/></g>`,
		"fallback": "lucide-lab:jacket-sports",
	});
}

export default Component;
