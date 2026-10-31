import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7ephwb-o.css';
import '../../css/c/c5k12m41c.css';
import '../../css/e/ef1turwgl.css';
import '../../css/i/i8r2h8w1j.css';
import '../../css/s/sciw6_bdd.css';
import '../../css/z/z8om_9bvc.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7ephwb-o"/><path class="c5k12m41c"/><path class="ef1turwgl"/><path class="i8r2h8w1j"/><path class="sciw6_bdd"/><path class="z8om_9bvc"/>`,
		"fallback": "tabler-flags:tajikistan",
	});
}

export default Component;
