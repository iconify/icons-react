import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1rxfewyg.css';
import '../../css/f/fx_ekx88i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x1rxfewyg"/><path class="fx_ekx88i"/>`,
		"fallback": "energy-icons:video-off-20",
	});
}

export default Component;
