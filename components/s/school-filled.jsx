import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x0otgbc0o.css';
import '../../css/q/q5ffr0-sa.css';
import '../../css/t/tsmhkwu9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x0otgbc0o"/><path clip-rule="evenodd" class="q5ffr0-sa"/><path class="tsmhkwu9x"/>`,
		"fallback": "lucide-extended:school-filled",
	});
}

export default Component;
