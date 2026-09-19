import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/k/ko22q1b9a.css';
import '../../css/u/u_n1eibqj.css';
import '../../css/q/q7n35qb7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><circle class="ko22q1b9a"/><path class="u_n1eibqj"/><path class="q7n35qb7m"/></g>`,
		"fallback": "akar-icons:person-cross",
	});
}

export default Component;
