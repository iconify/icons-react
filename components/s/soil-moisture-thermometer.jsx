import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vqn1o3bov.css';
import '../../css/a/a645xqbzf.css';
import '../../css/n/nr6a55h2i.css';
import '../../css/a/a8vd-7b-x.css';
import '../../css/k/kju8cq6vc.css';
import '../../css/f/fq52gnpbi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vqn1o3bov"/><path class="a645xqbzf"/><path class="nr6a55h2i"/><path class="a8vd-7b-x"/><path class="kju8cq6vc"/><path class="fq52gnpbi"/></g>`,
		"fallback": "andrsrxn:soil-moisture-thermometer",
	});
}

export default Component;
