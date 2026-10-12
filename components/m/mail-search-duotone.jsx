import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b9u5g0bja.css';
import '../../css/s/sigei6ulc.css';
import '../../css/a/a09196i_r.css';
import '../../css/z/ze35a9bxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b9u5g0bja"/><path class="sigei6ulc"/><path class="a09196i_r"/><path class="ze35a9bxf"/></g>`,
		"fallback": "lucide-extended:mail-search-duotone",
	});
}

export default Component;
