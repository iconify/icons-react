import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8dyr0iia.css';
import '../../css/m/m1hyp0bms.css';
import '../../css/c/c02oijjub.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m8dyr0iia"/><path class="m1hyp0bms"/><path class="c02oijjub"/>`,
		"fallback": "energy-icons:repeat-20",
	});
}

export default Component;
