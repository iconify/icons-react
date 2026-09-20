import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv6_a4bpb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pv6_a4bpb"/>`,
		"fallback": "ix:leading-axis-proxy",
	});
}

export default Component;
