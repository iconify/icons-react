import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ldqp-hbll.css';
import '../../css/g/ghz_-ebeo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ldqp-hbll"/><path class="ghz_-ebeo"/>`,
		"fallback": "lucide-extended:package-question-mark-filled",
	});
}

export default Component;
