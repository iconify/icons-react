import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/syqhj5bsw.css';
import '../../css/e/eoiplfbya.css';
import '../../css/s/s2pgtxb9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="syqhj5bsw"/><path class="eoiplfbya"/><path class="s2pgtxb9t"/></g>`,
		"fallback": "lucide-extended:scan-box-duotone",
	});
}

export default Component;
