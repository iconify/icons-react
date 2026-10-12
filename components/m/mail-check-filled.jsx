import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_r9uibzg.css';
import '../../css/g/gbd4jm86s.css';
import '../../css/z/zc_h-6bbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_r9uibzg"/><path class="gbd4jm86s"/><path class="zc_h-6bbl"/>`,
		"fallback": "lucide-extended:mail-check-filled",
	});
}

export default Component;
