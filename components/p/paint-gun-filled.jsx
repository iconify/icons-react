import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivw2o-sty.css';
import '../../css/i/i4_d93b6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ivw2o-sty"/><path class="i4_d93b6h"/>`,
		"fallback": "lucide-extended:paint-gun-filled",
	});
}

export default Component;
