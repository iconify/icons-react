import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/au0ie6bpn.css';
import '../../css/l/l4ovptbip.css';
import '../../css/q/qkmfhjfvj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="au0ie6bpn"/><path class="l4ovptbip"/><path class="qkmfhjfvj"/>`,
		"fallback": "vaadin:stop-cog",
	});
}

export default Component;
