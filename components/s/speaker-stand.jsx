import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dxk2dtb4g.css';
import '../../css/m/m9vpipbzf.css';
import '../../css/g/gnxfpjl9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dxk2dtb4g"/><path class="m9vpipbzf"/><path class="gnxfpjl9c"/>`,
		"fallback": "streamline-freehand:speaker-stand",
	});
}

export default Component;
