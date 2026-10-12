import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qc8tt5qhn.css';
import '../../css/b/bc3q-7bmw.css';
import '../../css/k/kabxu5bjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qc8tt5qhn"/><path class="bc3q-7bmw"/><path class="kabxu5bjy"/></g>`,
		"fallback": "lucide-extended:pickaxe-duotone",
	});
}

export default Component;
