import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gd0q8bb7j.css';
import '../../css/s/sczoe5bou.css';
import '../../css/o/oecuqacqp.css';
import '../../css/b/bbyntq65y.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gd0q8bb7j"/><path class="sczoe5bou"/><path class="oecuqacqp"/><path class="bbyntq65y"/>`,
		"fallback": "energy-icons:peatland-20-bold",
	});
}

export default Component;
