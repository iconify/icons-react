import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aap0qvl0c.css';
import '../../css/i/ia275-bew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="aap0qvl0c"/><path class="ia275-bew"/>`,
		"fallback": "lucide-extended:monitor-pc-filled",
	});
}

export default Component;
