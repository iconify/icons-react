import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjifzhf9x.css';
import '../../css/n/n3w40giun.css';
import '../../css/u/uem-t2b1i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xjifzhf9x"/><path class="n3w40giun"/><path class="uem-t2b1i"/>`,
		"fallback": "energy-icons:paint-bucket-48-bold",
	});
}

export default Component;
