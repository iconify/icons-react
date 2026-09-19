import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/ht6ygebcl.css';
import '../../css/e/eknl1w2wo.css';
import '../../css/c/cg43z_9pk.css';
import '../../css/v/vq6r24bfc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ht6ygebcl"/><path class="eknl1w2wo"/><path class="cg43z_9pk"/><path class="vq6r24bfc"/></g>`,
		"fallback": "fluent-emoji-flat:shooting-star",
	});
}

export default Component;
