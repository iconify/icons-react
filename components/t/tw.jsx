import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bng21ob9p.css';
import '../../css/z/zxwbuaboh.css';
import '../../css/e/e9owxoivt.css';
import '../../css/x/xl8v9tzqq.css';

const viewBox = {"width":300,"height":200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bng21ob9p"/><path class="zxwbuaboh"/><circle class="e9owxoivt"/><path class="xl8v9tzqq"/></g>`,
		"fallback": "cif:tw",
	});
}

export default Component;
