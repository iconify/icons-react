import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxjl0ubfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rxjl0ubfx"/>`,
		"fallback": "lucide-extended:panel-left-dashed-filled",
	});
}

export default Component;
