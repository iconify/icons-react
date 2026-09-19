import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ho0mqcbev.css';
import '../../css/g/gnewu523m.css';
import '../../css/q/qu12fqbgs.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 ho0mqcbev"/><path class="clr-i-solid clr-i-solid-path-2 gnewu523m"/><path class="clr-i-solid clr-i-solid-path-3 qu12fqbgs"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:recycle-solid",
	});
}

export default Component;
