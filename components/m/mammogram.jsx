import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xrcuuzyic.css';
import '../../css/j/jn7xxn7wf.css';
import '../../css/e/e83d2h_8m.css';
import '../../css/p/puxahe0ul.css';
import '../../css/c/c4kxq9btz.css';
import '../../css/w/wa5c5mbye.css';
import '../../css/t/trn23wglc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xrcuuzyic"/><path class="jn7xxn7wf"/><path class="e83d2h_8m"/><path class="puxahe0ul"/><path class="c4kxq9btz"/><path class="wa5c5mbye"/><path class="trn23wglc"/>`,
		"fallback": "carbon:mammogram",
	});
}

export default Component;
