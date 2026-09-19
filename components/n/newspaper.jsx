import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rqc3h8bog.css';
import '../../css/r/r_4du_b0o.css';
import '../../css/v/vbd1tacft.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rqc3h8bog"/><path class="r_4du_b0o"/><path class="vbd1tacft"/></g>`,
		"fallback": "fluent-emoji-flat:newspaper",
	});
}

export default Component;
