import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_raf5bng.css';
import '../../css/m/mdu7ndy5a.css';
import '../../css/q/qxlgg8b7q.css';
import '../../css/x/x39ffgk9s.css';
import '../../css/j/jalrrobek.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/w/w5_pgef9k.css';
import '../../css/u/u6zjywb-f.css';
import '../../css/v/vhk9bog-e.css';
import '../../css/c/c0o26x8su.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="e_raf5bng"><path class="mdu7ndy5a"/><circle class="qxlgg8b7q"/></g><path class="x39ffgk9s"/><circle class="jalrrobek"/><g class="brzn_0bpr"><path class="w5_pgef9k"/><circle class="u6zjywb-f"/><circle class="vhk9bog-e"/><path class="c0o26x8su"/></g>`,
		"fallback": "openmoji:man-playing-water-polo-dark-skin-tone",
	});
}

export default Component;
