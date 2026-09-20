import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvpd34b9j.css';
import '../../css/x/x32nieikw.css';
import '../../css/i/ij-62645t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xvpd34b9j"/><path class="x32nieikw"/><path class="ij-62645t"/>`,
		"fallback": "streamline-freehand:layers-stacked-1",
	});
}

export default Component;
