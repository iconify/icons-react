import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x50wf7bbj.css';
import '../../css/q/qgj3uiscg.css';
import '../../css/g/g92qnxb9i.css';
import '../../css/h/ho0rl5ler.css';
import '../../css/q/qidc0bqma.css';
import '../../css/a/a942ubc4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x50wf7bbj"/><path class="qgj3uiscg"/><path class="g92qnxb9i"/><circle class="ho0rl5ler"/><circle class="qidc0bqma"/><path class="a942ubc4c"/></g>`,
		"fallback": "andrsrxn:trolley",
	});
}

export default Component;
