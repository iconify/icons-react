import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qcppdqbtu.css';
import '../../css/r/ryx-c9qlj.css';
import '../../css/a/avygn0bfd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qcppdqbtu"/><path class="ryx-c9qlj"/><path class="avygn0bfd"/></g>`,
		"fallback": "pepicons-pencil:raise-hand",
	});
}

export default Component;
