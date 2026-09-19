import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2abq7bcp.css';
import '../../css/i/i10p98n8s.css';
import '../../css/x/xp0k47luu.css';
import '../../css/o/o2lq3ybcq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s2abq7bcp"/><g class="i10p98n8s"><path class="xp0k47luu"/><circle class="o2lq3ybcq"/></g>`,
		"fallback": "flat-color-icons:library",
	});
}

export default Component;
