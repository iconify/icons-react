import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-p5e-beu.css';
import '../../css/o/oe8kfdbvr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-p5e-beu"/><path class="oe8kfdbvr"/>`,
		"fallback": "lucide-extended:messages-circle-filled",
	});
}

export default Component;
