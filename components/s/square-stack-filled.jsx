import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tw0jtkbfd.css';
import '../../css/p/prq88gola.css';
import '../../css/z/zy5m7gbdl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tw0jtkbfd"/><path class="prq88gola"/><path class="zy5m7gbdl"/>`,
		"fallback": "lucide-extended:square-stack-filled",
	});
}

export default Component;
