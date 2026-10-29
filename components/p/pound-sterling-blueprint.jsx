import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/n/n2eefob8r.css';
import '../../css/e/ez5ki6tfk.css';
import '../../css/b/bp506jgve.css';
import '../../css/i/ik2bhobgk.css';
import '../../css/g/g56xwjh7n.css';
import '../../css/q/qc3_bib_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="n2eefob8r wm-deco"/><path class="ez5ki6tfk wm-deco"/><path class="bp506jgve wm-k"/><path class="ik2bhobgk wm-a"/><path class="g56xwjh7n wm-k"/><path class="qc3_bib_p wm-a"/></g>`,
		"fallback": "withicons:pound-sterling-blueprint",
	});
}

export default Component;
