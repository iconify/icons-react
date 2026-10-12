import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/acoyk8bzs.css';
import '../../css/x/xe4n45bra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="acoyk8bzs"/><path clip-rule="evenodd" class="xe4n45bra"/>`,
		"fallback": "lucide-extended:monitor-cog-filled",
	});
}

export default Component;
