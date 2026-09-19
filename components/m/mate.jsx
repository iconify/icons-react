import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djuf0b3ka.css';
import '../../css/a/afxo_ccff.css';
import '../../css/v/v6s_irb5r.css';
import '../../css/b/b4zb3ubog.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="djuf0b3ka"/><path class="afxo_ccff"/><path class="v6s_irb5r"/><path class="b4zb3ubog"/></g>`,
		"fallback": "fluent-emoji-flat:mate",
	});
}

export default Component;
