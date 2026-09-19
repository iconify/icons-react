import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o3rcfubbo.css';
import '../../css/b/blojk_b4r.css';
import '../../css/q/qn7k1-07f.css';
import '../../css/c/cp8wscc-n.css';
import '../../css/t/tdni3vbqb.css';
import '../../css/q/q9l1epqpg.css';
import '../../css/q/qnehk0b6f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="o3rcfubbo"/><circle class="blojk_b4r"/><circle class="qn7k1-07f"/><circle class="cp8wscc-n"/><circle class="tdni3vbqb"/><circle class="q9l1epqpg"/><circle class="qnehk0b6f"/></g>`,
		"fallback": "icon-park-solid:sound",
	});
}

export default Component;
