import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/undukhbqa.css';
import '../../css/m/m_xvzmb-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="undukhbqa"/><path clip-rule="evenodd" class="m_xvzmb-j"/>`,
		"fallback": "lucide-extended:search-filled",
	});
}

export default Component;
