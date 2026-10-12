import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zoqiw4b5c.css';
import '../../css/l/lg9rrm_lz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zoqiw4b5c"/><path class="lg9rrm_lz"/>`,
		"fallback": "lucide-extended:lasso-select-filled",
	});
}

export default Component;
