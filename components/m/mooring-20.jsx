import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mcd41kb4g.css';
import '../../css/n/n7msz9oby.css';
import '../../css/a/axlgonxbo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mcd41kb4g"/><path class="n7msz9oby"/><path class="axlgonxbo"/>`,
		"fallback": "energy-icons:mooring-20",
	});
}

export default Component;
