import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o3rcfubbo.css';
import '../../css/n/n5foubs5u.css';
import '../../css/q/qn7k1-07f.css';
import '../../css/c/cp8wscc-n.css';
import '../../css/t/tdni3vbqb.css';
import '../../css/q/q9l1epqpg.css';
import '../../css/j/ju7-g_bey.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="o3rcfubbo"/><circle class="n5foubs5u"/><circle class="qn7k1-07f"/><circle class="cp8wscc-n"/><circle class="tdni3vbqb"/><circle class="q9l1epqpg"/><circle class="ju7-g_bey"/></g>`,
		"fallback": "icon-park-outline:sound",
	});
}

export default Component;
