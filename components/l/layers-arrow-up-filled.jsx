import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8i9flbaf.css';
import '../../css/n/njfu2s7nv.css';
import '../../css/y/yhgcxzo7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x8i9flbaf"/><path class="njfu2s7nv"/><path class="yhgcxzo7f"/>`,
		"fallback": "lucide-extended:layers-arrow-up-filled",
	});
}

export default Component;
