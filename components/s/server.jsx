import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n470sjb7f.css';
import '../../css/k/k4ghvxb1z.css';
import '../../css/c/c---qdbqz.css';
import '../../css/l/lb1va2b1g.css';
import '../../css/x/xzfegqbpj.css';
import '../../css/i/ih1-vwf_a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n470sjb7f"/><path class="k4ghvxb1z"/><path class="c---qdbqz"/><path class="lb1va2b1g"/><path class="xzfegqbpj"/><path class="ih1-vwf_a"/></g>`,
		"fallback": "icon-park:server",
	});
}

export default Component;
