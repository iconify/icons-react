import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bnupiibrx.css';
import '../../css/z/zf2tkskut.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bnupiibrx"/><path class="zf2tkskut"/>`,
		"fallback": "lucide-extended:pen-tool-filled",
	});
}

export default Component;
