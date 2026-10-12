import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dx-5l-bfu.css';
import '../../css/l/l7ocqgb5a.css';
import '../../css/b/bmlydqbmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dx-5l-bfu"/><path class="l7ocqgb5a"/><path class="bmlydqbmd"/></g>`,
		"fallback": "lucide-extended:package-plus-duotone",
	});
}

export default Component;
