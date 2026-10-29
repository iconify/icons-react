import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pti0akbdb.css';
import '../../css/o/o6w7ekbub.css';
import '../../css/z/zkkco4b6x.css';
import '../../css/b/b7thxjbep.css';
import '../../css/h/h3y0vub_i.css';
import '../../css/o/obrxxfyzq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pti0akbdb wm-k"/><path class="o6w7ekbub wm-k"/><path class="wm-k zkkco4b6x"/><path class="b7thxjbep wm-k"/><path class="h3y0vub_i wm-shine"/><path class="obrxxfyzq wm-a"/></g>`,
		"fallback": "withicons-anime:square-function",
	});
}

export default Component;
