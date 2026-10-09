import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vfpjugbvy.css';
import '../../css/b/blnw30haf.css';
import '../../css/f/fox5ysyus.css';
import '../../css/k/kurs2nb8a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vfpjugbvy"/><path class="blnw30haf"/><path class="fox5ysyus"/><path class="kurs2nb8a"/>`,
		"fallback": "energy-icons:smart-home-48-bold",
	});
}

export default Component;
