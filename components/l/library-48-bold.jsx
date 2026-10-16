import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6cvwtbsp.css';
import '../../css/m/mi7mcubng.css';
import '../../css/w/wu28wrb5n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d6cvwtbsp"/><path class="mi7mcubng"/><path class="wu28wrb5n"/>`,
		"fallback": "energy-icons:library-48-bold",
	});
}

export default Component;
