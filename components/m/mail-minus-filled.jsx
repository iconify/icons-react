import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b9hctvb0f.css';
import '../../css/b/blymy14mn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b9hctvb0f"/><path class="blymy14mn"/>`,
		"fallback": "lucide-extended:mail-minus-filled",
	});
}

export default Component;
