import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g46hbrb1d.css';
import '../../css/s/spboszblp.css';
import '../../css/z/zc_h-6bbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g46hbrb1d"/><path class="spboszblp"/><path class="zc_h-6bbl"/>`,
		"fallback": "lucide-extended:mail-x-filled",
	});
}

export default Component;
