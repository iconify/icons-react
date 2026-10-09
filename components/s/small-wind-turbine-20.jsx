import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gob-ytbgf.css';
import '../../css/n/nb2fp75rv.css';
import '../../css/u/ubixxqbpx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gob-ytbgf"/><path class="nb2fp75rv"/><path class="ubixxqbpx"/>`,
		"fallback": "energy-icons:small-wind-turbine-20",
	});
}

export default Component;
