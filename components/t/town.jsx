import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/si9x_tawx.css';
import '../../css/t/t91jzegkj.css';
import '../../css/e/ehaq0g4oh.css';
import '../../css/r/rar3zyrof.css';
import '../../css/s/soa6ao6oq.css';
import '../../css/f/fj2j9ggvf.css';
import '../../css/u/u_73j7boa.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="si9x_tawx"/><path class="t91jzegkj"/><path class="ehaq0g4oh"/><path class="rar3zyrof"/><path class="soa6ao6oq"/><path class="fj2j9ggvf"/><path class="u_73j7boa"/>`,
		"fallback": "openmoji:town",
	});
}

export default Component;
