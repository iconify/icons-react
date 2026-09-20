import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c20ejs7zg.css';
import '../../css/p/pek1alrpa.css';
import '../../css/e/eysntvwok.css';
import '../../css/l/lyslkqbuz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="c20ejs7zg"/><path class="pek1alrpa"/><path class="eysntvwok"/><path class="lyslkqbuz"/></g>`,
		"fallback": "solar:running-line-duotone",
	});
}

export default Component;
