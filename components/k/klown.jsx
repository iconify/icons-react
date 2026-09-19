import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/za--gks2g.css';
import '../../css/m/md286fbip.css';
import '../../css/i/i6oojlb1f.css';
import '../../css/p/puadfrbkz.css';
import '../../css/n/n0jgb0b0f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="za--gks2g"/><g class="md286fbip"><path class="i6oojlb1f"/><path class="puadfrbkz"/><path class="n0jgb0b0f"/></g></g>`,
		"fallback": "cryptocurrency-color:klown",
	});
}

export default Component;
