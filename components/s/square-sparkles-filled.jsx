import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/voz3i-6tt.css';
import '../../css/q/q2snesbab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="voz3i-6tt"/><path class="q2snesbab"/>`,
		"fallback": "lucide-extended:square-sparkles-filled",
	});
}

export default Component;
