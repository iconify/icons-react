import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/d/dkdd3n86d.css';
import '../../css/l/lz421kbzw.css';
import '../../css/h/h71q4n6nr.css';
import '../../css/f/fqpodu9zv.css';
import '../../css/s/sy8psqbjp.css';
import '../../css/q/q7n5evbgb.css';
import '../../css/e/e475xk4sh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="dkdd3n86d"/><path class="lz421kbzw"/><path class="h71q4n6nr wm-k"/><path class="fqpodu9zv wm-a"/><path class="sy8psqbjp"/><path class="q7n5evbgb"/><path class="e475xk4sh wm-shine"/></g>`,
		"fallback": "withicons-kawaii:paint-roller",
	});
}

export default Component;
