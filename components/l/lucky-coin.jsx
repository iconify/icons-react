import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h4d05ib4z.css';
import '../../css/i/iuq9heblm.css';
import '../../css/f/f68gjerdd.css';
import '../../css/i/ipqbcjtmr.css';
import '../../css/p/puc7bnbka.css';
import '../../css/g/g-jwqvbsc.css';
import '../../css/c/cbd0ppbro.css';
import '../../css/v/v4n08cc9i.css';
import '../../css/c/cm62h7bni.css';
import '../../css/t/t8l9g1g7y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h4d05ib4z wm-shadow"/><path class="iuq9heblm"/><path class="f68gjerdd"/><path class="ipqbcjtmr"/><path class="puc7bnbka"/><path class="g-jwqvbsc"/><path class="cbd0ppbro"/><path class="v4n08cc9i wm-shine"/><path class="cm62h7bni"/><path class="t8l9g1g7y"/></g>`,
		"fallback": "withicons-luxe:lucky-coin",
	});
}

export default Component;
