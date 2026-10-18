import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cawzwbo3e.css';
import '../../css/o/o2iujpb6b.css';
import '../../css/f/ftz9zcbou.css';
import '../../css/h/h8v-jytyk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cawzwbo3e"/><path class="o2iujpb6b"/><path class="ftz9zcbou"/><path class="h8v-jytyk"/>`,
		"fallback": "energy-icons:net-metering-20",
	});
}

export default Component;
