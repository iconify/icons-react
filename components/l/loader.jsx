import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fkjlqpuwg.css';
import '../../css/e/ezwyswb-m.css';
import '../../css/i/iv-t8jimj.css';
import '../../css/c/c9rrsb19p.css';
import '../../css/g/gqit96npu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fkjlqpuwg wm-shadow"/><path class="ezwyswb-m wm-k"/><path class="iv-t8jimj wm-k"/><path class="c9rrsb19p wm-a"/><path class="gqit96npu wm-a"/>`,
		"fallback": "withicons-pastel:loader",
	});
}

export default Component;
