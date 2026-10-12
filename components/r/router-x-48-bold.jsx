import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i60v-5ifv.css';
import '../../css/y/y8or9ebdh.css';
import '../../css/s/sfb8rqn9v.css';
import '../../css/k/ksydp3lsw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i60v-5ifv"/><path class="y8or9ebdh"/><path class="sfb8rqn9v"/><path class="ksydp3lsw"/>`,
		"fallback": "energy-icons:router-x-48-bold",
	});
}

export default Component;
