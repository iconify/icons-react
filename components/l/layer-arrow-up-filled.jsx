import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufxbcneuu.css';
import '../../css/s/s1ghx-bwv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufxbcneuu"/><path class="s1ghx-bwv"/>`,
		"fallback": "lucide-extended:layer-arrow-up-filled",
	});
}

export default Component;
