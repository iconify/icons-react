import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i3kxc0e1n.css';
import '../../css/y/y8netlxfj.css';
import '../../css/y/yi22n4jut.css';
import '../../css/p/pydmqmk1k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i3kxc0e1n"/><path class="y8netlxfj"/><path class="yi22n4jut"/><path class="pydmqmk1k"/>`,
		"fallback": "energy-icons:turbine-maintenance-48",
	});
}

export default Component;
