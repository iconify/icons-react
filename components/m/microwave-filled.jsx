import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhjm4i6en.css';
import '../../css/m/mol_khq9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhjm4i6en"/><path clip-rule="evenodd" class="mol_khq9h"/>`,
		"fallback": "lucide-extended:microwave-filled",
	});
}

export default Component;
