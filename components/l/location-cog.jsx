import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zpkia7k9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zpkia7k9t"/>`,
		"fallback": "tabler:location-cog",
	});
}

export default Component;
