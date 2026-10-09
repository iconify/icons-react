import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/heh8_qbzw.css';
import '../../css/j/jqemctbeh.css';
import '../../css/l/l7fkvo-fr.css';
import '../../css/m/moj4tsily.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="heh8_qbzw"/><path class="jqemctbeh"/><path class="l7fkvo-fr"/><path class="moj4tsily"/>`,
		"fallback": "energy-icons:solar-array-sun-20-bold",
	});
}

export default Component;
