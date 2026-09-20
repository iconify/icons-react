import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qvp9oibxa.css';
import '../../css/g/gak0n5n6a.css';
import '../../css/l/l1kqu6b-g.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qvp9oibxa"/><path class="gak0n5n6a"/><path class="l1kqu6b-g"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-print:line-y-circle",
	});
}

export default Component;
