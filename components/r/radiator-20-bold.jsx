import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mqc5wb6qw.css';
import '../../css/s/s4umu5bdx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mqc5wb6qw"/><path class="s4umu5bdx"/>`,
		"fallback": "energy-icons:radiator-20-bold",
	});
}

export default Component;
